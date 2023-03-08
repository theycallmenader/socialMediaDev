const express = require('express');
const connectdb =require('./config/connectdb');
const cors = require('cors');
const app = express();


require('dotenv').config()

//* JSON MIDDELEWARE

app.use(express.json());
app.use(cors());

//*routes
app.use("/user",require("./routes/user"))
app.use("/post",require("./routes/post"))

//*connect db

connectdb();
port=process.env.PORT
app.listen(port,(err)=>{
    err?console.log(err):console.log('server is running')
});