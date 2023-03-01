import request from 'supertest'
import server from '../server'

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(server).get('/')
    expect(response.statusCode).toBe(200)
  })

  test('It should respond with JSON data', async () => {
    const response = await request(server).get('/')
    expect(response.type).toMatch(/json/)
  })

  test('It should return a message', async () => {
    const response = await request(server).get('/')
    expect(response.body.message).toBe('Express server running!')
  })
})
