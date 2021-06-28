import request from 'supertest'
import app from './index'

const postUserUrl = '/api/1.0/users'
const testUser = { username: 'test', email: 'test@test.com', password: 'test' }

describe('When user provides username and password', () => {
  it('returns 200 OK when the user request is valid', done => {
    request(app)
      .post(postUserUrl)
      .send(testUser)
      .then(response => {
        expect(response.status).toBe(200)
        done()
      })
  })

  it('should contain a userId in the response body', async () => {
    const response = await request(app).post(postUserUrl).send(testUser)

    expect(response.body.userId).toBeDefined()
  })

  test('should specify json as the content type in the http header', async () => {
    const response = await request(app).post(postUserUrl).send(testUser)
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })

  it('returns message in body upon successful registration', done => {
    request(app)
      .post(postUserUrl)
      .send(testUser)
      .then(response => {
        expect(response.body.message).toBe('User created')
        done()
      })
  })
})

describe('When user provides invalid request', () => {
  it('should return a 400 status code', async () => {
    const bodies = [{ username: 'test' }, { password: 'test' }, { email: 'test@test.com' }]
    for (const body of bodies) {
      const response = await request(app).post(postUserUrl).send(body)
      expect(response.statusCode).toBe(400)
    }
  })
})
