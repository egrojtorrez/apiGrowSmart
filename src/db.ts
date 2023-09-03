import { Pool } from "pg";
import { DBHOST, DBNAME, DBPASSWORD, DBPORT, DBUSER } from "./config";

export const pool = new Pool({
  host: DBHOST,
  port: DBPORT,
  user: DBUSER,
  password: DBPASSWORD,
  database: DBNAME,
});

