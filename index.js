

const Auth = require('./lib/class.auth.js');
const Blog = require('./lib/class.blog.js');
const BlogAuthors = require('./lib/class.blogauthors.js');
const BlogComments = require('./lib/class.blogcomments.js');
const BlogPosts = require('./lib/class.blogposts.js');
const BlogTopics = require('./lib/class.blogtopics.js');
const Contacts = require('./lib/class.contacts.js');
const Files = require('./lib/class.files.js');
const Forms = require('./lib/class.forms.js');
const HubDb = require('./lib/class.hubdb.js');
const Pages = require('./lib/class.pages.js');
const Templates = require('./lib/class.templates.js');

module.exports = { 
  Auth,
  Blog,
  BlogAuthors,
  BlogComments,
  BlogPosts,
  BlogTopics,
  Contacts,
  Files,
  Forms,
  HubDb,
  Pages,
  Templates
};