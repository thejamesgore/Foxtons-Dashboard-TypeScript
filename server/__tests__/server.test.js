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

test('It should return a 404 error for non-existing route', async () => {
  const response = await request(server).get('/non-existing-route')
  expect(response.statusCode).toBe(404)
})

test('It should have CORS enabled', async () => {
  const response = await request(server).get('/')
  expect(response.headers['access-control-allow-origin']).toBe('*')
})

test('It should set the response headers correctly for a route', async () => {
  const response = await request(server).get('/')
  expect(response.headers['content-type']).toMatch(/json/)
  expect(response.headers['access-control-allow-origin']).toBe('*')
})
