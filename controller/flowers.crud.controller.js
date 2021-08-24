'use strict'

const {FlowerModel} = require('../models/flowers.mongoose.model')

const createFavFlowers = (req,res)=>{
    const{name,photo,instructions} = req.body;
    const newData = new FlowerModel({
        name:name,
        photo:photo,
        instructions:instructions,
    });
    newData.save();
    res.send(newData)
}

const getFavFlowers = ( req,res)=>{
    const {email} =req.query
    FlowerModel.find({email:email},(err,data)=>{
        res.send(data)
    });
}

const deleteFavFlowers = (req,res)=>{
    const {id} = req.params;
    FlowerModel.remove({_id:id},(err,data)=>{
    FlowerModel.find({},(err,data)=>{
            res.send(data)
    })
})
}

const updateFavFlowers = (req,res) =>{
    const {id}= req.params;
    const {name,photo,instructions} = req.body;
    FlowerModel.findByIdAndUpdate({_id:id},{
        name:name,
        photo:photo,
        instructions:instructions
    },{new:true},(err,data)=>{
        res.send(data)
    })
}

module.exports={createFavFlowers , getFavFlowers,deleteFavFlowers,updateFavFlowers}