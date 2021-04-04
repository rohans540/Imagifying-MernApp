import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoutes from './Routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//This cors() config should always be above the routes config otherwise it will result in cors error
app.use(cors());
app.use('/posts', postsRoutes);

//This connection URL is not safe here it is supposed to be stored in the environment variables
const CONNECTION_URL = "mongodb+srv://rohans540:rohans540123@cluster0.mmjcq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    }))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);