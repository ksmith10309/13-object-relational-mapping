'use strict';

const methods = ['POST', 'GET', 'DELETE', 'PUT'];

export default (req, res, next) => {
  // Returns a status code of 404 for routes that have not been registered
  if (!methods.includes(req.method)) {
    //console.error('ROUTE_NOT_FOUND', req.method);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Route Not Found';
    res.end('Route has not been registered. Please use POST, GET, DELETE, or PUT.');
  }
  // Returns a status code of 404 for unregistered paths
  else {
    //console.error('PATH_NOT_FOUND', req.path);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Path Not Found';
    res.end('Path has not been registered. Please check path.');
  }
};
