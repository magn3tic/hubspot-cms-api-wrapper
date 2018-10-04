
require('dotenv').config();

const request = require('request');
const limit = require('simple-rate-limiter');


class Base {

  constructor(options={}) {
    const defaults = {
      hapikey: process.env.HS_APIKEY,
      portalid: process.env.HS_PORTALID,
      apiBase: 'https://api.hubapi.com/',
      rateLimit: [10, 100],
      authmode: 'apikey' // or 'oauth'
    };
    this.s = this.extend(defaults, options);
    this.access_token = this.access_token || null;
    this.refresh_token = this.refresh_token || null;
  }

  extend(obj, src) {
    for (let key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key]; }
    return obj;
  }

  buildReqUrl(apipath) {
    let fullurl = this.s.apiBase + apipath;
    if (this.s.authmode === 'apikey') {
      const delim = apipath.indexOf('?') > 3 ? '&' : '?';
      return fullurl += `${delim}hapikey=${this.s.hapikey}`;
    } else {
      return fullurl;
    }
  }

  getRequestOptions(opts) {
    const result = Object.assign({}, opts);
    result.url = this.buildReqUrl(opts.url);
    if (this.s.authmode === 'oauth') {
      result.auth = {
        'bearer':  this.access_token
      };
    }
    return result;
  };

  rateLimitedRequest(options, callback) {
    return limit(request(options, callback)).to(this.s.rateLimit[0]).per(this.s.rateLimit[1]);
  }

  $fileUpload(url, formData, callback) {
    const r = limit(request.post(url, callback)).to(this.s.rateLimit[0]).per(this.s.rateLimit[1]);
    const upload = r.form();
    for (let prop in formData) {
      upload.append(prop, formData[prop]);
    }
  } 

  $request(reqopts) {
    return new Promise((resolve, reject) => {
      this.rateLimitedRequest(reqopts, (err, body, res) => {
        if (err !== null) {
          reject({err, body, res});
        } else {
          resolve({err, body, res});
        }
      });
    });
  }

};


module.exports = Base;