
const qs = require('querystring');
const Base = require('./class.base.js');


class BlogAuthors extends Base {
  
  constructor(options={}) {
    super(options);
  }

  listAll(params={}) {
    return super.$request(
      super.getRequestOptions({
        url: `blogs/v3/blog-authors?${qs.stringify(params)}`,
        method: 'GET',
        json: true
      })
    );
  }

  search(params={}) {
    return super.$request(
      super.getRequestOptions({
        url: `blogs/v3/blog-authors/search?${qs.stringify(params)}`,
        method: 'GET',
        json: true
      })
    );
  }

  getById(id) {
    return super.$request(
      super.getRequestOptions({
        url: `blogs/v3/blog-authors/${id}`,
        method: 'GET',
        json: true
      })
    );
  }

  createNew() {

  }

  update() {

  }

  delete() {

  }
};


module.exports = BlogAuthors;