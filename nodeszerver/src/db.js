import pg from 'pg'

const { Client } = pg

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'styxa serverlecke',
  password: 'ITsuli42',
  port: 5432
})

await client.connect()




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
       WHERE id = ${felhasznaloID}
      `)
    return users.rows
  }  
export async function modifyUsers(felhasznaloID, nev, email) {
    const user =await client.query(`
      UPDATE felhasznalok
       SET nev = '${nev}', email = '${email}'
       WHERE id = ${felhasznaloID}
       `)
    }
  




export function createCategory(){
    client.query(`
    CREATE TABLE IF NOT EXISTS  kategoriak (
kategoriaID INT GENERATED ALWAYS AS IDENTITY,
kategorianev VARCHAR(255) NOT NULL,
PRIMARY KEY (kategoriaID)
        )`)
}
export function addCategory(kategorianev){
  client.query(`
    INSERT INTO kategoriak (kategoriaID, kategorianev)
    VALUES (DEFAULT, '${kategorianev}')
    `)
}
export async function getCategory() {
  const category = await client.query(`SELECT * FROM kategoriak`)
  return category.rows
}
export async function deleteCategory(kategoriaID) {
  const category = await client.query(`
    DELETE FROM kategoriak
    WHERE id = ${kategoriaID}
    `)
  return category.rows
}
export async function modifyCategory(kategoriaID, kategorianev) {
    const category =await client.query(`
      UPDATE kategoriak
       SET kategorianev = '${kategorianev}'
       WHERE id = ${kategoriaID}
       `)
    } 



   
export function createCikkek(){
    client.query(`
    CREATE TABLE IF NOT EXISTS cikkek (
      cikkID INT GENERATED ALWAYS AS IDENTITY,
      cikkcim VARCHAR(100) NOT NULL,
      cikkdatum TIMESTAMP,
      szerzoID INT,
      szoveg VARCHAR(255),
      kategoriaID INT,
      PRIMARY KEY (cikkID),
      CONSTRAINT fk_szerzoID FOREIGN KEY(szerzoID) REFERENCES felhasznalok(felhasznaloID),
      CONSTRAINT fk_kategoriaID FOREIGN KEY(kategoriaID) REFERENCES kategoriak(kategoriaID)
      ) `)
    }  