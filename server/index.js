import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import commentsRoutes from "./routes/comments.js";


const app = express();

dotenv.config();
//prefixing posts to localhost:5000/posts

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user', userRoutes);
app.use('/comments', commentsRoutes);
app.get('/', (req,res)=>{
    res.send('Hello to memories API');
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port,() => console.log(`server running on port: ${port}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);



