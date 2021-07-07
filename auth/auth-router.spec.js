const request = require('supertest');
const server = require('../api/server');

describe('server', () => {
    const user = {
        username: 'jest',
        password: 'password'
    }
    
    describe('POST /auth/register', () => {
        it('status returns 201', () => {
            request(server)
            .post('auth/register')
            .send(user)
            .then(res => {
                console.log('201 TEST', res.status)
                expect(res.status).toBe(201)
            })
        });

        it('returns message', () => {
            request(server)
            .post('auth/register')
            .send(user)
            .then(res => {
                console.log('MESSAGE TEST: ', res.body)
                expect(res.body.message).toBe('user registered')
            })
        })
    });

        describe('POST /auth/login', () => {
            it('status returns 200', () => {
                request(server)
                .post('auth/login')
                .send(user)
                .then(res => {
                    console.log('200 TEST: ', res.status)
                });            
            })

            it('returns welcome message', () => {
                request(server)
                .post('auth/login')
                .send(user)
                .then(res => {
                    console.log('200 TEST: ', res.body)
                    expect({message}).toBe('Welcome!')
            })
        });

    })
})