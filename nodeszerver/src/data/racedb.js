import { client } from '../db.js'

export function createRace() {
  client.query(`
    CREATE TABLE IF NOT EXISTS races (
      raceID INT GENERATED ALWAYS AS IDENTITY,
      race VARCHAR(100) NOT NULL,
      description VARCHAR(255),
      PRIMARY KEY (raceID)
      ) `)
}

export async function addRace(race, description) {
  await client.query(`
        INSERT INTO races (raceID, race, description)
         VALUES (DEFAULT, '${race}', '${description}')
        `)
}

export async function getRace() {
  const race = await client.query(`SELECT * FROM races`)
  return race.rows
}

export async function deleteRace(raceID) {
  const race = await client.query(`
            DELETE FROM races
             WHERE raceID = ${raceID}
            `)
  return race.rows
}

export async function modifyRace(raceID, race, description) {
  await client.query(`
            UPDATE races
             SET race = '${race}', description = '${description}'
             WHERE raceID = ${raceID}
             `)
}
