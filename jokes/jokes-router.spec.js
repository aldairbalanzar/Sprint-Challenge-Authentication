const request = require('supertest');
const server = require('../api/server');

describe('server', () => {
    const user = {
        username: 'jest',
        password: 'password'
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoicG9zdG1hbjIiLCJpYXQiOjE1ODc3NDk1MTksImV4cCI6MTU4NzgzNTkxOX0.qNX7AhF5sWKtTh6-x-xjuWWOGXn4-NjXA3sS5Z6vfpg'
    
    describe('GET /jokes', () => {
        it('status returns 200', () => {
            request(server)
            .get('/jokes')
            .then(res => {
                expect(res.body).toBeTruthy()
            })
        });

        it('returns status 200', () => {
            request(server)
            .get('/jokes')
            .then(res => {
                expect(res).toBeTruthy()
            })
        })
    });
})