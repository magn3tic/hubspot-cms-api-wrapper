
const qs = require('querystring');
const Base = require('./class.base.js');


class Contacts extends Base {
  
  constructor(options={}) {
    super(options);
  }

  createOrUpdate(email, postbody) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/createOrUpdate/email/${email}`,
        method: 'POST',
        body: postbody,
        json: true
      })
    );
  }

  //202 on success
  createOrUpdateBatch(postbody) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/batch/`,
        method: 'POST',
        body: postbody
        json: true
      })
    );
  }

  //200 on success
  delete(id) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/vid/${id}`,
        method: 'DELETE',
        json: true
      })
    );
  }

  listAll(params={count: 100}) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/lists/all/contacts/all?${qs.stringify(params)}`,
        method: 'GET',
        json: true
      })
    );
  }

  getRecentlyModified(params={count: 100}) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/lists/recently_updated/contacts/recent?${qs.stringify(params)}`,
        method: 'GET',
        json: true
      })
    );
  }

  getRecentlyCreated(params={count: 100}) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/lists/all/contacts/recent?${qs.stringify(params)}`,
        method: 'GET',
        json: true
      })
    );
  }

  getById(id) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/vid/${id}/profile`,
        method: 'GET',
        json: true
      })
    );
  }


  getGroupById(ids=[], params={}) {
    const vids = '?vid=' + ids.join('&vid=');
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/vids/batch/${vids}&${qs.stringify()}`,
        method: 'GET',
        json: true
      })
    );
  }

  getByEmail(email) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/email/${email}/profile`,
        method: 'GET',
        json: true
      })
    );
  }

  getByToken(token) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/utk/${token}/profile`,
        method: 'GET',
        json: true
      })
    );
  }

  search(params={q: 'Search Term'}) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/search/query?${qs.stringify(params)}`,
        method: 'GET',
        json: true
      })
    );
  }

  merge(id, mergeid) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/v1/contact/merge-vids/${id}/`,
        method: 'POST',
        body: { vidToMerge: mergeid },
        json: true
      })
    );
  }

  getLifecycleStageMetrics(params={}) {
    return super.$request(
      super.getRequestOptions({
        url: `contacts/search/v1/external/lifecyclestages?${qs.stringify(params)}`,
        method: 'GET',
        json: true
      })
    );
  }
};

module.exports = Contacts;