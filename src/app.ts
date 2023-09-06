import express from 'express'
import { pool } from './db'

const app = express()
app.use(express.json())

app.get('/ping', async (_, res) => {
  const result = await pool.query('SELECT NOW()')
  return res.json(result.rows[0])
})

export default app
