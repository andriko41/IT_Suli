import pg from 'pg'

const { Client } = pg

export const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'styxa serverlecke',
  password: 'ITsuli42',
  port: 5432
})

await client.connect()




   
