const express = require('express');  
const app = require('./app');
const mongo = require('mongoose');
require('dotenv').config();

const port = 3000;
const authRouter = require('./routes/auth');

app.use(express.json());  
app.use(authRouter);

const DB = process.env.DB;
// const DB ="mongodb+srv://ssanashajiya:82xyqZGf8imjfUsw@cluster0.c01uw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongo.connect(DB)
    .then(() => console.log('Connection Successful'))
    .catch((e) => console.log(e));

app.get('/',(req,res)=>{
    res.send("heloo...");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
