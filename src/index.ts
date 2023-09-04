import express from 'express'
import { pool } from './db'
import { PORT } from './config'

const app = express()
app.use(express.json())

app.get('/ping', async (_, res) => {
  const result = await pool.query('SELECT NOW()')
  return res.json(result.rows[0])
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
