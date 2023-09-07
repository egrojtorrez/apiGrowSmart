// create a function that read a .sql file and return a string
import path from 'node:path'
import fs from 'node:fs'

export const INITIALIZEDBD = (): string => {
  const sql = fs.readFileSync(path.join(__dirname, '../../database/init.sql'), 'utf8')
  return sql
}
