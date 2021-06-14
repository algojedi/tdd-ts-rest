import request from 'supertest'
import { app } from './index'

it('returns 200 OK when the user request is valid', (done) => {
    request(app)
        .post('/api/1.0/users')
        .send({
            username: 'asher',
            email: 'asher@hotmail.com',
            password: test
        })
        .expect(200, done)
})
