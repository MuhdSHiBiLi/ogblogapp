const mongoose = require('mongoose');
mongoose.connect(process.env.mongoDB_URL)
.then((res)=>{
    console.log('db connected');
})
.catch((err)=>{
    console.log("db errror"+ err)
})