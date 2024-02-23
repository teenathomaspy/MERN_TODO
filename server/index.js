import  express  from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import Routes from './routes/route.js';
import connection from "./database/db.js";
const app =express();
const PORT=8000;
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes);

connection();
app.listen(PORT,()=>{console.log(`Server up and running on PORT ${PORT}`);})