import { describe, expect, it } from 'vitest'

describe('Initial Test', async () => {
  it('Api Work', async () => {
    const result = await fetch('http://localhost:3000/ping')
    const status = result.status
    expect(status).toBe(200)
  })

  it('BD Work', async () => {
    const result = await fetch('http://localhost:3000/ping')
    const data = await result.json()
    expect(data).toHaveProperty('now')
  })
})
