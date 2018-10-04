
const qs = require('querystring');
const Base = require('./class.base.js');


class Blog extends Base {
  
  constructor(options={}) {
    super(options);
  }

  listAll(query) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/blogs?${qs.stringify(query)}&hapikey=${this.s.hapikey}`,
      method: 'GET',
      json: true
    });
  }

  getById(blogid) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/blogs/${blogid}?hapikey=${this.s.hapikey}`,
      method: 'GET',
      json: true
    });
  }

  listPreviousVerions(blogid) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/blogs/${blogid}/versions?hapikey=${this.s.hapikey}`,
      method: 'GET',
      json: true
    });
  }

  getPreviousVersion(bogid, vid) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/blogs/${blogid}/versions/${vid}?hapikey=${this.s.hapikey}`,
      method: 'GET',
      json: true
    });
  }
};

module.exports = Blog;