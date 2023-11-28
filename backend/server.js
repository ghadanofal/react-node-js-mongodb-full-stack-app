const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/ecommerceRoute")
require ('dotenv').config()
const cors = require('cors')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
console.log(`[server]:server is running at http://127.0.0.1:${PORT}`);
dbConnect();
});

const dbConnect=()=>{
    console.log("connecting to db ... ");
    mongoose.default.connect("mongodb://127.0.0.1:27017/e-commerce")
.then(()=> console.log(`connected to mongodb`))
.catch((err)=>console.log(err))
}


app.use(express.json());
app.use("/api",router);

