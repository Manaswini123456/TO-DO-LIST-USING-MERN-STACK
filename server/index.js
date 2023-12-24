import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors(
    {
        origin:["http://to-do-list-using-mern-stack-pbotdn6vm-manaswini123456.vercel.app"],
        methods:["POST","GET","PUT","DELETE"],
        credentials:true
    }
));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const Port = 8080;

Connection();

app.listen(Port,()=>console.log(`Server is running at ${Port}`))
