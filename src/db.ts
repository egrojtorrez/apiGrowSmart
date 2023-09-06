import { Pool } from 'pg'
import { DBHOST, DBNAME, DBPASSWORD, DBPORT, DBUSER, INITBD } from './config'

export const pool = new Pool({
  host: DBHOST,
  port: DBPORT,
  user: DBUSER,
  password: DBPASSWORD,
  database: DBNAME
})

const initDB = (): void => {
  if (INITBD === 'true') {
    pool.query('SELECT NOW()').then(() => {
      console.log('DB initialized')
    }).catch((err) => {
      console.log('Error initializing DB', err)
    })
  }
}

initDB()
