
const qs = require('querystring');
const Base = require('./class.base.js');


class Auth extends Base {
  
  // this class needs a constructor
  constructor(client_id, client_secret, redirect_uri) {
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.redirect_uri = redirect_uri;
    this.authmode = 'oauth';
    this.access_token = null;
    this.refresh_token = null;
  }

  setTokens(access, refresh) {
    this.access_token = access;
    this.refresh_token = refresh;
  }

  getAuthUrl(scopes=['contacts']) {
    const params = {
      client_id: this.client_id,
      scope: scopes.join(','),
      redirect_uri: this.redirect_uri
    };
    return `https://app.hubspot.com/oauth/authorize?${qs.stringify(params)}`;
  }

  getNewTokens(code=false, refreshToken=false) {
    const postbody = { client_id, client_secret, redirect_uri } = this;
    postbody.grant_type = refreshToken ? 'refresh_token' : 'authorization_code';
    if (refreshToken) {
      postbody.refresh_token = refreshToken;
    } else if (code) {
      postbody.code = code;
    }
    return super.$request({
      url: `${this.s.apiBase}oauth/v1/token`,
      method: 'POST',
      body: postbody
    });
  }

  getAccessTokenInfo(token) {
    return super.$request({
      url: `${this.s.apiBase}oauth/v1/access-tokens/${token}`,
      method: 'GET',
      json: true
    });
  }

  getRefreshTokenInfo(token) {
    return super.$request({
      url: `${this.s.apiBase}oauth/v1/refresh-tokens/${token}`,
      method: 'GET',
      json: true
    });
  }

  //expect 204 response on success
  deleteRefreshToken(token) {
    return super.$request({
      url: `${this.s.apiBase}oauth/v1/refresh-tokens/${token}`,
      method: 'DELETE'
    });
  }
};


module.exports = Auth;