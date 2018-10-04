const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;


const { 
  Files,
  Templates,
  Pages
} = require('./../index');
const mock = require('./mock-fixtures.js');


const templatesClient = new Templates();
let testIdToDelete = null;


describe('Templates API Client', function() {

  it('Lists templates from the portal', async function() {
    const result = await templatesClient.listAll({
      limit: 50,
      is_available_for_new_content: true
    });
    const body = result.body.body;
    assert.isNotNull(result.err, 'Error is non-null');
    assert.property(body, 'objects', 'Response has "objects" property');
  });

  
  it('Gets a template by its ID', async function() {
    const result = await templatesClient.getById(mock.template.id);
    const body = result.body.body;
    assert.property(body, 'source');
  });


  it('Updates an existing template', async function() {
    const result = await templatesClient.update(mock.template.id, mock.template.html(`Current time is ${Date.now()}`));
    const body = result.body.body;
    assert.property(body, 'id');
  });


  it('Creates a new template', async function() {
    const result = await templatesClient.create({
      category_id: 1,
      template_type: 4,
      path: `testing/templates/${Date.now()}.html`,
      source: mock.template.html('A New Template!'),
      is_available_for_new_content: true
    });
    const body = result.body.body;

    testIdToDelete = body.id;
    assert.property(body, 'id');
  });

  
  it('Deletes a template', async function() {
    const result = await templatesClient.delete(testIdToDelete);
  });

});