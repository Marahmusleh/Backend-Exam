
const mongoose = require('mongoose');

const flowerSchema = mongoose.Schema({
    name:String,
    photo:String,
    instructions:String,
    email:String
})

const FlowerModel = mongoose.model('flowers_list',flowerSchema);

const seedData =() =>{
const user1= new FlowerModel({
    email:'marahaltarefe18@gmail.com'
})
const user2= new FlowerModel({
    email:'tamim.hamoudi@gmail.com'
})

user1.save()
user2.save()
}

module.exports = { FlowerModel ,seedData}
