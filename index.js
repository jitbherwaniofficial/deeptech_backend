const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv/config');
const Task = require('./task')

port = process.env.PORT || 3000;

const app  = express();

app.use(express.json());

app.use(cors())
app.options('*',cors())

app.get('/', async(req,res)=>{
    const task = await Task.find()
    res.send(task)
 })

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('DATABASE CONNECTED')
    }).catch((err) => {
        console.log(err);
    })


app.listen(port, () =>{
    console.log(`LISTENING TO PORT: ${port}`);
})
