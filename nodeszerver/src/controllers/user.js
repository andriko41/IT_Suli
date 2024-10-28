import { getUsers,addUsers,modifyUsers, deleteUsers } from "../db.js"


 async function GetUsers(req, res) {
    res.send(await getUsers())  
}

 async function AddUser(req, res) {
    const {nev, email} = req.body
    await addUsers(nev, email)
    res.send('sikeres')
}

 async function ModifyUsers(req, res) {
    const {email, nev} = req.body
    const {felhasznaloID} = req.params
    res.send(await modifyUsers(felhasznaloID, nev, email))
}

 async function DeleteUsers(req, res) {
    const {felhasznaloID} = req.params
    res.send(await deleteUsers(felhasznaloID))
}

export const userController = {
    GetUsers,
    AddUser,
    ModifyUsers,
    DeleteUsers
}