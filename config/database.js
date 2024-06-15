import mongoose from "mongoose";

export const connectToDatabase = async () =>{
    try {
        console.log("Database is connecting...");
        const result = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected with server ${result.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection failed!");
        console.log(error);
    }
}

