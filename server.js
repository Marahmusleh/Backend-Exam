'use strict'
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3021
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const mongoose = require('mongoose');
const getFlowers = require('./controller/flowers.controller');
const { seedData } = require('./models/flowers.mongoose.model');
const { createFavFlowers, getFavFlowers, deleteFavFlowers, updateFavFlowers } = require('./controller/flowers.crud.controller');


mongoose.connect(`${MONGO_DB_URL}/flowers`, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello');
})

// seedData()

app.get('/flowers',getFlowers)

app.post('/flowers/favorite',createFavFlowers)
app.get('/flowers/favorite',getFavFlowers)
app.delete('/flowers/favorite/:id',deleteFavFlowers)
app.put('/flowers/favorite/:id',updateFavFlowers)


app.listen(PORT, ()=>{
    console.log(`server is working on ${PORT}`)
})

