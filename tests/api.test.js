const request = require('supertest');
const db = require('../database-mongo/index.js');
const app = require('../server/index.js');

describe('Database should respond with proper data', () => {
  test('/items endpoint should exist', () => {
    return request(app).get('/items')
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
  
  test('It should respond with at least 1 item', () => {
    return request(app).get('/items')
      .then(res => {
        expect(res.body.length).toBeGreaterThan(0);
      });
  });
});