const express = require("express");
//import cors
const cors = require("cors");
const app = express();
const connectdb = require("./config/connectdb");

require("dotenv").config();
//*connect db

connectdb();
//* JSON MIDDELEWARE

app.use(express.json());
app.use(cors());

//*routes
app.use("/user", require("./routes/user"));
app.use("/post", require("./routes/post"));
app.use("/commentaire", require("./routes/commentaire"));
app.use("/repondrecommentaire", require("./routes/repondreCommentaire"));


port = process.env.PORT;
app.listen(port, (err) => {
  err ? console.log(err) : console.log("server is running");
});
