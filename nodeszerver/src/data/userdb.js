import { client } from '../db.js'

export function createUser() {
  client.query(`
    CREATE TABLE IF NOT EXISTS felhasznalok (
            felhasznaloID INT GENERATED ALWAYS AS IDENTITY,
            nev VARCHAR(100) NOT NULL,
            jelszo VARCHAR(100),
            email VARCHAR(100),
            datum TIMESTAMP,
            PRIMARY KEY (felhasznaloID)
        )`)
}

export async function addUsers(nev, jelszo, email) {
  await client.query(`
  INSERT INTO felhasznalok (felhasznaloID, nev, jelszo, email, datum)
   VALUES (DEFAULT, '${nev}', '${jelszo}', '${email}', NOW())
  `)
}

export async function getUsers() {
  const users = await client.query(`SELECT * FROM felhasznalok`)
  return users.rows
}

export async function deleteUsers(felhasznaloID) {
  const users = await client.query(`
      DELETE FROM felhasznalok
       WHERE felhasznaloID = ${felhasznaloID}
      `)
  return users.rows
}

export async function modifyUsers(felhasznaloID, nev, email) {
  await client.query(`
      UPDATE felhasznalok
       SET nev = '${nev}', email = '${email}'
       WHERE felhasznaloID = ${felhasznaloID}
       `)
}

export async function loginUser(email) {
  const login = await client.query(`SELECT * FROM felhasznalok 
        WHERE email = '${email}'`)
  return login.rows[0].jelszo
}
