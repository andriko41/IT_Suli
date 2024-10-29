import { client } from "../db.js"

export function createUser(){
    client.query(`
    CREATE TABLE IF NOT EXISTS felhasznalok (
            felhasznaloID INT GENERATED ALWAYS AS IDENTITY,
            nev VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            datum TIMESTAMP,
            PRIMARY KEY (felhasznaloID)
        )`)
}

export async function addUsers(nev, email){
  await client.query(`
  INSERT INTO felhasznalok (felhasznaloID, nev, email, datum)
   VALUES (DEFAULT, '${nev}', '${email}', NOW())
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
    const user =await client.query(`
      UPDATE felhasznalok
       SET nev = '${nev}', email = '${email}'
       WHERE felhasznaloID = ${felhasznaloID}
       `)
    }

 
