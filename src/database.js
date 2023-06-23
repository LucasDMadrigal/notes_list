require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    // useUndefinedTopology:true,
    // useNewUrlParser:true
}).then(db => console.log("db conected"))
.catch(error => console.log(error))