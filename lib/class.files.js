const fs = require('fs');
const Base = require('./class.base.js');


class Files extends Base {

  constructor(options={}) {
    super(options);
  }

  uploadNewFile(filepath, remotefolder, filename=null) {
    const uploadData = { files: fs.readFileSync(filepath).toString() },
    folderInfo = Number.isInteger(remotefolder) ? 'folder_id' : 'folder_paths';
    uploadData[folderInfo] = remotefolder;
    const uploadFile = (resolve, reject) => {
      const url = `${this.apiBase}filemanager/api/v2/files?hapikey=${this.s.hapikey}`;
      super.$fileUpload(url, uploadData, (err, body, res) => {
        const errors = super.httpResponseError(err, body, res);
        if (!errors) {
          resolve(body, res);
        } else {
          reject(err, body, res);
        }
      });
    };
    return new Promise(uploadFile);
  }

  listAllFileMetadata() {

  }


  uploadReplacementFile() {

  }

  markFileAsDeleted() {

  }

  getFileMetadata() {

  }

  archiveFile() {

  }

  hardDeleteFile() {

  }

  moveFile() {

  }

  createFolder() {

  }

  listAllFolderMetadata() {

  }

  deleteFolder() {

  }

  getFolderById() {

  }

  moveOrRenameFolder() {

  }
};


module.exports = Files;