import {addFavs, getFavs, deleteFavs} from "../data/favdb.js"


async function GetFavs(req, res) {
    res.send(await getFavs())  
}

async function AddFavs(req, res) {
    const {felhasznaloID, cikkID} = req.body
    await addFavs(felhasznaloID, cikkID)
    res.send('sikeres')
}

async function DeleteFavs(req, res) {
    const {felhasznaloID} = req.params
    res.send(await deleteFavs(felhasznaloID))
   
}


export const favsController = {
    GetFavs,
    AddFavs,
    DeleteFavs
    
 }