import { client } from '../db.js'

export function createCikkek() {
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

export async function addArticle(cikkcim, szerzoID, szoveg, kategoriaID) {
  await client.query(`
        INSERT INTO cikkek (cikkID, cikkcim, cikkdatum, szerzoID, szoveg, kategoriaID )
         VALUES (DEFAULT, '${cikkcim}', NOW(), ${szerzoID}, '${szoveg}', ${kategoriaID})
        `)
}

export async function getArticle() {
  const article = await client.query(`SELECT * FROM cikkek`)
  return article.rows
}

export async function deleteArticle(cikkID) {
  const article = await client.query(`
            DELETE FROM cikkek
             WHERE cikkID = ${cikkID}
            `)
  return article.rows
}

export async function modifyArticle(cikkID, cikkcim, szoveg) {
  await client.query(`
            UPDATE cikkek
             SET cikkcim = '${cikkcim}', szoveg = '${szoveg}'
             WHERE cikkID = ${cikkID}
             `)
}
