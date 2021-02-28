import mongoose from "mongoose";

export const addNotificationStream = (pusher) =>{
    const db = mongoose.connection;
    const notificationsCollection = db.collection('notifications');
    const changeStream = notificationsCollection.watch();
    const channel = 'notifications';
    changeStream.on('change',(change=>{
        switch(change.operationType){
            case 'insert':
                const notification = change.fullDocument;
                pusher.trigger(channel,
                    'inserted',{
                    ...notification
                });
                return
            case 'delete':
                pusher.trigger(
                    channel,
                    'deleted',
                    change.documentKey._id
                );
            default:
                console.log(`event ${change.operationType} not handle in the switch statement`);         
        }
    }))
}
