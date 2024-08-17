

const mongoose = require("mongoose");
const MONGO_URI = process.env.DATABASE;

// const MONGO_URI = 'mongodb://localhost:27017';
mongoose.connect(MONGO_URI)

.then(()=>console.log("successfully connected to MongoDB"))
.catch(err=>console.error("Connection Error"));