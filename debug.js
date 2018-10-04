

const hsclient = require('./index.js');
const mock = require('./test/mock-fixtures.js');


const Templates = new hsclient.Templates();


const getTemplates = async () => {
  const result = await Templates.listAll({
    limit: 50,
    is_available_for_new_content: true
  });
  console.log(result.body.body);
};


const getTemplateById = async () => {
  const result = await Templates.getById(mock.template.id);
  console.log(result);
};


const updateTemplate = async () => {

};




getTemplateById();