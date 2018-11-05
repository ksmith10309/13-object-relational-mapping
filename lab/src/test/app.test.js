const { app } = require('../app.js');

import server from './supergoose.js';
import { startDB, stopDB } from './supergoose.js';

let testId;

beforeAll((done) => {
  startDB();
  server(app)
    .post('/api/candy')
    .send({name:'KitKat', chocolate:true})
    .then(response => {
      testId = response.body._id;
      console.log('TEST CANDY', response.body.name);
      console.log('TEST ID', testId);
      done();
    });
});

afterAll(() => {
  stopDB();
});

describe('Candy App Tests', () => {
  it(`API: returns a status code of 404 for routes that have not been registered`, (done) => {
    server(app)
      .patch('/api/candy')
      .then(response => {
        expect(response.res.statusCode).toBe(404);
        expect(response.res.statusMessage).toBe('Route Not Found');
        done();
      });
  });
  it(`GET: test 200, returns a resource with a valid body`, (done) => {
    server(app)
      .get('/api/candy/' + testId)
      .then(response => {
        expect(response.res.statusCode).toBe(200);
        expect(response.body._id).toBe(testId);
        expect(response.body.name).toEqual('KitKat');
        expect(response.body.chocolate).toEqual(true);
        done();
      });
  });
  it(`GET: test 404, respond with 'not found' for valid requests made with an id that was not found`, (done) => {
    server(app)
      .get('/api/candy/123')
      .then(response => {
        expect(response.res.statusCode).toBe(404);
        expect(response.res.statusMessage).toBe('Not Found');
        done();
      });
  });
  it(`GET: test 400, responds with 'bad request' if no id was provided`, (done) => {
    server(app)
      .get('/api/candy')
      .then(response => {
        expect(response.res.statusCode).toBe(400);
        expect(response.res.statusMessage).toBe('Bad Request');
        done();
      });
  });
  it('PUT: test 200, returns a successful update message', (done) => {
    server(app)
      .put('/api/candy/' + testId)
      .send({name:'Snickers'})
      .then(response => {
        expect(response.res.statusCode).toBe(200);
        expect(response.res.statusMessage).toBe('OK');
        done();
      });
  });
  it(`PUT: test 400, responds with 'bad request' if no request body was provided`, (done) => {
    server(app)
      .put('/api/candy')
      .send()
      .then(response => {
        expect(response.res.statusCode).toBe(400);
        expect(response.res.statusMessage).toBe('Bad Request');
        done();
      });
  });
  it(`PUT: test 404, responds with 'not found' for valid requests made with an id that was not found`, (done) => {
    server(app)
      .put('/api/candy/123')
      .send({name:'Twix', chocolate:true})
      .then(response => {
        expect(response.res.statusCode).toBe(404);
        expect(response.res.statusMessage).toBe('Not Found');
        done();
      });
  });
  it(`POST: test 400, responds with 'bad request' if no request body was provided`, (done) => {
    server(app)
      .post('/api/candy')
      .send()
      .then(response => {
        expect(response.res.statusCode).toBe(400);
        expect(response.res.statusMessage).toBe('Bad Request');
        done();
      });
  });
  it(`POST: test 200, returns a resource for requests made with a valid body`, (done) => {
    server(app)
      .post('/api/candy')
      .send({name:'Milky Way', chocolate:true})
      .then(response => {
        expect(response.res.statusCode).toBe(200);
        expect(response.body.name).toEqual('Milky Way');
        expect(response.body.chocolate).toEqual(true);
        done();
      });
  });
});
