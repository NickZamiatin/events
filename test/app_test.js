const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');
const app = require('../app');
const eventZForTest = require('./eventZForTest');


describe('CRUD Events', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        return knex.seed.run();
      }).then(() => done());
  })
  
  it ('Get All',(done)=>{
    request(app)
      .get('/api/v1/events')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(eventZForTest.events);
        done();
    });
  });
  it ('Get One by id',(done)=>{
    request(app)
      .get('/api/v1/events/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(eventZForTest.events[0]);
        done();
    });
  });
  it ('Get One by id',(done)=>{
    request(app)
      .get('/api/v1/events/7')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(eventZForTest.events[6]);
        done();
    });
  });
  it ('Create',(done)=>{
    request(app)
      .post('/api/v1/events')
      .send(eventZForTest.event)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        eventZForTest.event.id = response.body.id;
        expect(response.body).to.deep.equal(eventZForTest.event);
        done();
    });
  });
  it ('Update',(done)=>{
    eventZForTest.event.title = "My Friend CJ "
    request(app)
      .put('/api/v1/events/11')
      .send(eventZForTest.event)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        eventZForTest.event.id = response.body.id;
        console.log(response.body)
        console.log(eventZForTest.event)
        expect(response.body).to.deep.equal(eventZForTest.event);
        done();
    });
  });
  it ('Delete',(done)=>{
    request(app)
      .delete('/api/v1/events/11')
      .send(eventZForTest.event)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal({
          deleted: true
        });
        done();
    });
  });
}) 