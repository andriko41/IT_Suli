import { client } from '../db.js'

export function createCategory() {
  client.query(`
    CREATE TABLE IF NOT EXISTS  kategoriak (
    kategoriaID INT GENERATED ALWAYS AS IDENTITY,
    kategorianev VARCHAR(255) NOT NULL,
    PRIMARY KEY (kategoriaID)
        )`)
}

export function addCategory(kategorianev) {
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
    WHERE kategoriaID = ${kategoriaID}
    `)
  return category.rows
}

export async function modifyCategory(kategoriaID, kategorianev) {
  await client.query(`
      UPDATE kategoriak
       SET kategorianev = '${kategorianev}'
       WHERE kategoriaID = ${kategoriaID}
       `)
}
