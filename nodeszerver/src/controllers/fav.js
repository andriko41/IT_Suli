import { addFavs, getFavs, deleteFavs } from '../data/favdb.js'
import { addRule } from '../validators/favs.js'

async function GetFavs(req, res) {
  res.send(await getFavs())
}

async function AddFavs(req, res) {
  try {
    const { felhasznaloID, cikkID } = await addRule.validateAsync(req.body)
    await addFavs(felhasznaloID, cikkID)
    res.send('sikeres')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteFavs(req, res) {
  const { felhasznaloID, cikkID } = req.params
  await deleteFavs(felhasznaloID, cikkID)
  res.send('sikeres')
}

export const favsController = {
  GetFavs,
  AddFavs,
  DeleteFavs
}
