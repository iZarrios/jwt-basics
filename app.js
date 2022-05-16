import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';

import mainRouter from './routes/main.js';
import routeNotFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// environment variables
dotenv.config();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

const app = express();

//middleware 
app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1', mainRouter);

app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async() => {
    try {
        app.listen(port, () => {
            console.log(`listening on http://localhost:${port}/`);
        });
    } catch (error) {
        console.log(error);
    }

};


start();