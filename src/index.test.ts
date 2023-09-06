import app from './app'
import request from 'supertest'
import { describe, expect, it } from 'vitest'

describe('GET/ ping ', async () => {
  const response = await request(app).get('/ping')
  it('Status is 200', async () => {
    expect(response.status).toBe(200)
  })
  it('Body have the now property', async () => {
    expect(response.body).toHaveProperty('now')
  })
})
