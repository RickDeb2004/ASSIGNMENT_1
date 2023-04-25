import mongoose from "mongoose";
const userSchema=new mongoose.Schema({

    "_id":ObjectID,
    "firstname":String,
    "lastname":String,
    'email':String,
    'gender':String,
    'phone':String,
    "car":{
        'brand':String,
        'model':String

    },
    'income':Number
});
const User=mongoose.model('User',userSchema);
export default User;