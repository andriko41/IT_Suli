import { Router } from "express";
import { articleController } from "../controllers/article.js";

export const articleRouter = Router()

articleRouter.get('/', articleController.GetArticle)

articleRouter.post('/', articleController.AddArticle)

articleRouter.put('/:cikkID', articleController.ModifyArticle)

articleRouter.delete('/:cikkID', articleController.DeleteArticle)