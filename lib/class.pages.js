
const qs = require('querystring');
const Base = require('./class.base.js');


class Pages extends Base {

  constructor(options) {
    super();
  }

  createNew(postbody) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/pages?hapikey=${this.s.hapikey}`,
      method: 'POST',
      json: true,
      body: postbody
    });
  }

  listAll(params) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/pages?${qs.stringify(params)}&hapikey=${this.s.hapikey}`,
      method: 'GET',
      json: true
    });
  }

  update(id, updated) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/pages/${id}?hapikey=${this.s.hapikey}`,
      method: 'PUT',
      json: true,
      body: updated
    });
  }

  delete(id) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/pages/${id}?hapikey=${this.s.hapikey}`,
      method: 'DELETE',
      json: true
    });
  }

  getById(id) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/pages/${id}?hapikey=${this.s.hapikey}`,
      method: 'GET',
      json: true
    });
  }

  updateAutoSaveBuffer(id, updated) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/pages/${id}/buffer?hapikey=${this.s.hapikey}`,
      method: 'PUT',
      json: true,
      body: updated
    });
  }

  getAutoSaveBuffer() {

  }

  clone(id) {
    return super.$request({
      url: `${this.s.apiBase}content/api/v2/pages/${id}/clone?hapikey=${this.s.hapikey}`,
      method: 'POST',
      json: true
    });
  }
};


module.exports = Pages;