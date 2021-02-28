import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
   
    userId:String,
    name:String,
    userName:String,
    imageUrl:String, //avatar
    followers:{
        type:[String],
        default:[],
    },
    followings:{
        type:[String],
        default:[],
    },

  
});


const ProfileMessage = mongoose.model('profile', profileSchema);

export default ProfileMessage;
