import { Router } from "express";
import { favsController } from "../controllers/fav.js";

export const favsRouter = Router()

favsRouter.get('/', favsController.GetFavs)

favsRouter.post('/', favsController.AddFavs)

favsRouter.delete('/:felhasznaloID', favsController.DeleteFavs)

