import mongoose from "mongoose"

const ConnectDb = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    } catch(err){
        console.log(err)
    }
}

export default ConnectDb;