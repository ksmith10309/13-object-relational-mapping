'use strict';

export default (err, req, res, next) => {
  //console.error('ID_NOT_FOUND', err);
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.end('ID was not found.');
};
