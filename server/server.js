require('dotenv').config();
const express=require("express");
const app=express();
const  router=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const connectDb=require("./utils/db");
const cors=require("cors");
const errorMiddleware = require('./middleware/errorMiddleware');

const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/",router);
app.use("/form",contactRoute);

app.use(errorMiddleware)

connectDb().then(()=>{
app.listen(8080,()=>{
    console.log("Listen on port 8080");
})
})