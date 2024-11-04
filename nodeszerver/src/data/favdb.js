import { client } from "../db.js"

export function createKedvencek(){
    client.query(`
    CREATE TABLE IF NOT EXISTS kedvencek (
    felhasznaloID int NOT NULL,
    cikkID int NOT NULL,
    PRIMARY KEY  (felhasznaloID, cikkID),
    CONSTRAINT fk_felhasznaloID FOREIGN KEY(felhasznaloID) REFERENCES felhasznalok(felhasznaloID),
    CONSTRAINT fk_cikkID FOREIGN KEY(cikkID) REFERENCES cikkek(cikkID)
       ) `)
    }  

export async function addFavs(felhasznaloID, cikkID,){
    await client.query(`
        INSERT INTO kedvencek (felhasznaloID, cikkID)
        VALUES (${felhasznaloID}, ${cikkID})
           `)
    }

export async function getFavs() {
        const favs = await client.query(`SELECT * FROM kedvencek`)
        return favs.rows
    }

export async function deleteFavs(felhasznaloID) {
        const favs = await client.query(`
        DELETE FROM kedvencek
         WHERE felhasznaloID = ${felhasznaloID}
        `)
        return favs.rows
      }      

