import { client } from "../db.js"


    
export function createHozzaszolasok(){
    client.query(`
    CREATE TABLE IF NOT EXISTS hozzaszolasok (
    hozzaszolasID INT GENERATED ALWAYS AS IDENTITY,
    felhasznaloID INT,
    cikkID INT,
    datum TIMESTAMP,
    szoveg VARCHAR(255),
    PRIMARY KEY (hozzaszolasID)
       ) `)
    }  

 export async function addComents(felhasznaloID, cikkID, szoveg){
     await client.query(`
        INSERT INTO hozzaszolasok (hozzaszolasID, felhasznaloID, cikkID, datum, szoveg )
         VALUES (DEFAULT, ${felhasznaloID}, ${cikkID}, NOW(),'${szoveg}')
        `)
    }

 export async function getComents() {
        const coments = await client.query(`SELECT * FROM hozzaszolasok`)
        return coments.rows
      }

 export async function deleteComents(hozzaszolasID) {
        const coments = await client.query(`
          DELETE FROM hozzaszolasok
           WHERE hozzaszolasID = ${hozzaszolasID}
          `)
        return coments.rows
      }  

      export async function modifyComents(hozzaszolasID, szoveg) {
        const coments = await client.query(`
          UPDATE hozzaszolasok
           SET szoveg = '${szoveg}'
           WHERE hozzaszolasID = ${hozzaszolasID}
           `)
        }      
        