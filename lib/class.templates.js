
const qs = require('querystring');
const Base = require('./class.base.js');


class Templates extends Base {

  constructor(options={}) {
    super(options);
  }

  createNew(postbody) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates`,
        method: 'POST',
        json: true,
        body: postbody
      })
    );
  }

  listAll(query={}) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates?${qs.stringify(query)}`,
        method: 'GET',
        json: true
      })
    );
  }

  update(id, source) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}`,
        method: 'PUT',
        json: true,
        body: { source }
      })
    );
  }

  getById(id) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}`,
        method: 'GET',
        json: true
      })
    );
  }

  delete(id) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}`,
        method: 'DELETE',
        json: true
      })
    );
  }

  updateAutoSaveBuffer(id, source) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}/buffer`,
        method: 'PUT',
        json: true,
        body: { source }
      })
    );
  }

  getAutoSaveBuffer(id) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}/buffer`,
        method: 'GET',
        json: true
      })
    );
  }

  autoSaveBufferDiffers(id) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}/has-buffered-changes`,
        method: 'GET'
      })
    );
  }

  restoreDeleted(id) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}/restore-deleted`,
        method: 'POST',
        json: true
      })
    );
  }

  listPreviousVersions(id) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${id}/versions`,
        method: 'GET',
        json: true
      })
    );
  }

  getPreviousVersion(tid, vid) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${tid}/versions/${vid}`,
        method: 'GET',
        json: true
      })
    );
  }

  restorePreviousVersion(tid, version_id) {
    return super.$request(
      super.getRequestOptions({
        url: `content/api/v2/templates/${tid}/versions/restore`,
        method: 'POST',
        json: true,
        body: { version_id }
      })
    );
  }

};

module.exports = Templates;