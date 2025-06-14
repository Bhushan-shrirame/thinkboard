import express  from "express";
import { createNote, deleteNotes, getAllNotes, updatedNotes,getNoteById } from "../controller/notesController.js";

const router = express.Router();

router.get("/", getAllNotes)
router.get("/:id", getNoteById)
router.post("/" , createNote)
router.put("/:id" , updatedNotes)
router.delete("/:id" , deleteNotes)

export default router