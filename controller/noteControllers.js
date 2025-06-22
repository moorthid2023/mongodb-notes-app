import {
  insertNoteService,
  fetchNoteService,
} from "../services/noteServices.js";

export const insertNoteController = async (req, res) => {
  try {
    const data = req.body;
    const result = await insertNoteService(data);
    res.status(201).json({ message: "note added succesfully", result });
  } catch (err) {
    console.log("error insertNoteController ", err);
  }
};

export const fetchNoteController = async(req,res) => {
  try {
    const notes = await fetchNoteService();
    res.status(201).json({message:"notes added succesfully ",notes});
  } catch (err) {
    console.log("error fetchNoteController ", err);
  }
};
