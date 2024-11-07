import {
  addArticle,
  getArticle,
  modifyArticle,
  deleteArticle
} from '../data/articledb.js'
import { addRule, modifyRule } from '../validators/article.js'

async function GetArticle(req, res) {
  res.send(await getArticle())
}

async function AddArticle(req, res) {
  try {
    const { cikkcim, szerzoID, szoveg, kategoriaID } =
      await addRule.validateAsync(req.body)
    await addArticle(cikkcim, szerzoID, szoveg, kategoriaID)
    res.send('sikeres')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function ModifyArticle(req, res) {
  try {
    const { cikkcim, szoveg } = await modifyRule.validateAsync(req.body)
    const { cikkID } = req.params
    await modifyArticle(cikkID, cikkcim, szoveg)
    res.send('sikeres')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteArticle(req, res) {
  const { cikkID } = req.params
  await deleteArticle(cikkID)
  res.send('sikeres')
}

export const articleController = {
  GetArticle,
  AddArticle,
  ModifyArticle,
  DeleteArticle
}
