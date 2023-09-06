import app from '@src/app'
import request from 'supertest'
import { describe, expect, it } from 'vitest'

describe('POST/ user/signup', async () => {
  const response = await request(app).post('/user/signup')
  it('Status is 201', async () => {
    expect(response.status).toBe(201)
  })

  it('Body have the now property', async () => {
    expect(response.body).toHaveProperty('message')
  })

  it('Message signup', async () => {
    expect(response.body.message).toBe('signup')
  })
})

describe('POST/ user/signin', async () => {
  const response = await request(app).post('/user/signin')
  it('Status is 200', async () => {
    expect(response.status).toBe(200)
  })

  it('Body have the now property', async () => {
    expect(response.body).toHaveProperty('message')
  })

  it('Message signin', async () => {
    expect(response.body.message).toBe('signin')
  })
})
