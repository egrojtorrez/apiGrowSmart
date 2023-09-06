import express from 'express'
import { pool } from './db'
import routes from './routes/routes'

const app = express()
app.use(express.json())
app.use(routes)

app.get('/ping', async (_, res) => {
  const result = await pool.query('SELECT NOW()')
  return res.json(result.rows[0])
})

export default app
