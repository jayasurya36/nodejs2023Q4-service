require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Connected to database successfully')
}).catch(err =>{
    console.log(err.message)
})

app.listen(5000 , ()=>{
    console.log('Server listening to the port 5000');
})