import { client } from '../db.js'

export function createCities() {
  client.query(`
    CREATE TABLE IF NOT EXISTS cities (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(80),
    description VARCHAR(255),
    population INT,
    PRIMARY KEY (id)
  
       ) `)
}

export async function addCity(name, description, population) {
  await client.query(`
        INSERT INTO cities (id, name, description, population)
         VALUES (DEFAULT, '${name}', '${description}',${population})
         
        `)
}

export async function getCity() {
  const city = await client.query(`SELECT * FROM cities`)
  return city.rows
}

export async function getCityByID(id) {
  const city = await client.query(`SELECT * FROM cities
    WHERE id = ${id}`)
  return city.rows
}

export async function deleteCity(id) {
  const city = await client.query(`
          DELETE FROM cities
           WHERE id = ${id}
          `)
  return city.rows
}

export async function updateCity(id, name, description, population) {
  await client.query(`
          UPDATE cities
           SET name = '${name}', description = '${description}', population = '${population}'
           WHERE id = ${id}
           `)
}
