
const Base = require('./class.base');


class HubDb extends Base {

  constructor(options={}) {
    super(options);
  }

  getAllTables() {
    return super.$request({
      super.getRequestOptions({
        url: `hubdb/api/v2/tables?portalId=${this.s.portalid}`,
        method: 'GET',
        json: true
      })
    });
  }

  getTableDetails(tableid, draft=false) {
    return super.$request({
      super.getRequestOptions({
        url: draft ? `hubdb/api/v2/tables/${tableid}/draft` : `hubdb/api/v2/tables/${tableid}`,
        method: 'GET',
        json: true
      })
    });
  }

  createNewTable(postbody) {
    return super.$request({
      super.getRequestOptions({
        url: `hubdb/api/v2/tables`,
        method: 'POST',
        body: postbody,
        json: true
      })
    });
  }

  cloneTable(tableid, tablename=false, draft=false) {
    const postbody = {};
    if (tablename) {
      postbody.newName = tablename;
    }
    return super.$request({
      super.getRequestOptions({
        url: draft ? `hubdb/api/v2/tables/${tableid}/clone/draft` : `hubdb/api/v2/tables/${tableid}/clone`,
        method: 'POST',
        body: postbody,
        json: true
      })
    });
  }

  updateTable() {

  }

  deleteTable() {

  }

  getTableRows(tableid) {

  }

  addRowToTable() {

  }

  cloneRow() {

  }

  updateRow() {

  }

  deleteRow() {

  }

  updateRowCell() {

  }

  deleteRowCell() {

  }

  importCSV() {

  }
};


module.exports = HubDb;