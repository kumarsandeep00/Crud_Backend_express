require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connecton");
const users = require("./model/userSchems");
const router = require("./routes/router")
const cors = require("cors");
const port = process.env.PORT || 8003;
// app.use(cors({
//     origin:"http://localhost:3000"
// }));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`server is start port number ${port}`)
})