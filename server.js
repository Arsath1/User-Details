const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
    process.env.DB_LINK ,{
        useNewUrlparser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(err)return console.error(err);
        console.log("DB Connected Successfull")
    })

const userRouter = require("./routes/user");
app.use("/user", userRouter)

app.listen(PORT,() =>{
    console.log(`Server is running at port ${PORT}`)
})