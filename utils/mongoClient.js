import dotenv from 'dotenv';
dotenv.config();
import {MongoClient} from 'mongodb';
const client = new MongoClient(process.env.URI);

let db;

const connectMongo=async ()=>{
    try{
        if(db)return db;
        await client.connect();
        db = client.db(process.env.DB_NAME);
        return db;
    }catch(err){
        console.log("error connecting to mongo db ",err);
    }
}

export default connectMongo;