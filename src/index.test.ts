import { describe, expect, it } from 'vitest'
import { pool } from './db'

describe('Initial Test', () => {
  it('BD Work!', async () => {
    const result = await pool.query('SELECT NOW()')
    expect(result.rows[0]).toBeDefined()
  })
})
