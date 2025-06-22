import { fetchNoteController,insertNoteController } from "../controller/noteControllers.js";
import express from 'express';
const router = express.Router();

router.get("/",fetchNoteController);
router.post("/",insertNoteController);

export default router;
