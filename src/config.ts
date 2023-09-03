import 'dotenv/config'

// PostgreSQL Database Configuration
export const DBPORT = Number(process.env.DBPORT)
export const DBHOST = process.env.DBHOST
export const DBUSER = process.env.DBUSER
export const DBPASSWORD = process.env.DBPASSWORD
export const DBNAME = process.env.DBNAME

// NODE Server Configuration
export const PORT = Number(process.env.PORT)

