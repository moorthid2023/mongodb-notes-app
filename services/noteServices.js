import { insertNoteRepo,fetchNoteRepo } from "../repositories/noteRepositories.js";

export const insertNoteService = async(data)=>{
    if(!data.title || !data.content){
        throw new Error("Title or Content required");
    }
    const formattedData = {
        title:data.title,
        content:data.content,
        createdAt:new Date()
    }
    const result = await insertNoteRepo(formattedData);
    return result;
}
export const fetchNoteService = async()=>{
    const notes = await fetchNoteRepo();
    return notes;
}