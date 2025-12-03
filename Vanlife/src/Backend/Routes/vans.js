import express from "express"
import { getVans } from "../Controllers/getVans.js"
import { getVanDetails } from "../Controllers/getVanDetails.js"
export const vansRouter = express.Router()

vansRouter.get('/', getVans)
vansRouter.get('/:id', getVanDetails)