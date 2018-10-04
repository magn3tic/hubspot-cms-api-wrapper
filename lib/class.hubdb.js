
const Base = require('./class.base');



class HubDb extends Base {

  constructor(options) {
    if (options) super(options);
    else super();
  }

  getAllTables() {
    const getTables = (resolve, reject) => {
      super.$http({
        url: `${this.apiBase}hubdb/api/v2/tables?portalId=${this.portalid}&hapikey=${this.hapikey}`,
        json: true
      }, (err, body, res) => {
        const errors = super.httpResponseError(err, body, res);
        if (!errors) {
          resolve(body, res);
        } else {
          reject(err, body, res);
        }
      });
    };
    return new Promise(getTables);
  }

  getTableDetails(tableid, drafts=false) {

  }

  createNewTable() {

  }

  cloneTable() {

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