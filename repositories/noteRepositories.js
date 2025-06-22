import connectMongo from '../utils/mongoClient.js';

export const insertNoteRepo = async(data)=>{
const db = await connectMongo();
const result = db.collection('notes').insertOne(data);
return result;
}
export const fetchNoteRepo = async()=>{
    const db = await connectMongo();
    const notes = db.collection('notes').find().toArray();
    return notes;
}