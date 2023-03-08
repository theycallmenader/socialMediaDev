const mongoose = require('mongoose');

const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.URLDB)
        console.log('MongoDB Connected')

    } catch (error) {
        console.log("database connection error")
    }
}
module.exports=connectdb; 