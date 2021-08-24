'use strice'

const axios = require('axios');
const Flowers = require('../models/flowers.model')

const getFlowers = async(req,res)=>{
    const response = await axios.get('https://flowers-api-13.herokuapp.com/getFlowers').then(data=>{
        const item = data.data.flowerslist.map(obj=>{
            return new Flowers(obj)
        });
        res.send(item);
    }).catch(err=>{
    console.log(err);
    })
}
module.exports=getFlowers