import express from 'express'
import { getData } from '../controllers/journalController.js'

export const journalRoute = express.Router()

journalRoute.get('/', getData)