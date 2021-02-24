import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import {postRoutes,userRoutes,commentsRoutes,notificationsRoutes,profilesRoutes} from "./routes/index.js";
import Pusher from "pusher";

const channel = 'notifications';

const app = express();

dotenv.config();
//prefixing posts to localhost:5000/posts

const pusher = new Pusher({
    appId: "1152837",
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "mt1",
    useTLS: true,
});
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user', userRoutes);
app.use('/comments', commentsRoutes);
app.use('/notifications',notificationsRoutes);
app.use('/profiles',profilesRoutes);
app.get('/', (req,res)=>{
    res.send('Hello to memories API');
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify',false);

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection Error:'));
db.once('open', ()=>{
    app.listen(port,() => console.log(`server running on port: ${port}`));
    const notificationsCollection = db.collection('notifications');
    const changeStream = notificationsCollection.watch();

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

})
