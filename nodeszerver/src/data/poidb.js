import { client } from '../db.js'

export function createPoi() {
  client.query(`
    CREATE TABLE IF NOT EXISTS  poi (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(80) NOT NULL,
    description VARCHAR(255) NOT NULL,
    cityID INT,
    PRIMARY KEY (id),
    CONSTRAINT fk_cityID FOREIGN KEY(id) REFERENCES cities (id)
        )`)
}

export function addPoi(name, description, cityID) {
  client.query(`
    INSERT INTO poi (id, name, description, cityID)
    VALUES (DEFAULT, '${name}','${description}', ${cityID})
    `)
}

export async function getPoi() {
  const poi = await client.query(`SELECT * FROM poi`)
  return poi.rows
}

export async function getPoiByID(id) {
  const poi = await client.query(`SELECT * FROM poi
    WHERE id = ${id}`)
  return poi.rows
}

export async function deletePoi(id) {
  const poi = await client.query(`
    DELETE FROM poi
    WHERE id = ${id}
    `)
  return poi.rows
}

export async function modifyPoi(id, name, description, cityID) {
  await client.query(`
      UPDATE poi
      SET name = '${name}', description = '${description}',  cityID = ${cityID}
       WHERE id = ${id}
       `)
}
