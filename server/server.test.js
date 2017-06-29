const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server Test', () => {

    describe('GET /', () => {
        it('should return an object response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({ age: 36 })
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should check /user and return an array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Amin',
                        location: 'Montreal',
                        age: 36
                    })
                })
                .end(done);
        });
    });

});