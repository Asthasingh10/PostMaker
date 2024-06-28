const mongoose=require("mongoose");

// const URI="mongodb://127.0.0.1:27017/postmakerbackend"
const URI=process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to database");
    } catch (error) {
        console.error("Connection failed:", error);
        process.exit(1); 
    }
}

module.exports=connectDb;