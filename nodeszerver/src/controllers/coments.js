import {addComents, getComents, deleteComents, modifyComents} from "../data/comentsdb.js"

async function GetComents(req, res) {
    res.send(await getComents())  
}

async function AddComents(req, res) {
    const {felhasznaloID, cikkID, szoveg} = req.body
    await addComents(felhasznaloID, cikkID, szoveg)
    res.send('sikeres')
}

async function DeleteComents(req, res) {
    const {hozzaszolasID} = req.params
    res.send(await deleteComents(hozzaszolasID))
}

async function ModifyComents(req, res) {
    const { szoveg} = req.body
    const {hozzaszolasID} = req.params
    res.send(await modifyComents(hozzaszolasID, szoveg))
}

export const comentsController = {
   GetComents,
   AddComents,
   DeleteComents,
   ModifyComents
}