'use strict';

export default (err, req, res, next) => {
  //console.error('BAD_REQUEST', err.name);
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.end('The request body was invalid. Please provide a valid request body.');
};
