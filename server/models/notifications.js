import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
    notificationType: {
        type: String,
        required: true,
    },
    postId:{
        type:String,
    },
    isPost:Boolean,
    userId: String,
    userName: String,
    receiverId: String,
    receiverName: String,
    createAt: {
        type: Date,
        default: new Date()
    },


});


const notification = mongoose.model('Notifications', notificationSchema);

export default notification;
