'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/posts?delete=1':
      postsHandler.handleDelete(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);
      break;
    case '/favicon.ico':
      util.handleFile(req, res, "./favicon.ico", 'image/vnd.microsoft.icon');
      break;
    case '/bootstrap.min.css':
      util.handleFile(req, res, "./views/bootstrap.min.css", 'text/css');
      break;
    case '/jquery.min.js':
      util.handleFile(req, res, "./views/jquery-1.11.2.min.js", 'text/javascript');
      break;
    case '/bootstrap.min.js':
      util.handleFile(req, res, "./views/bootstrap.min.js", 'text/javascript');
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};