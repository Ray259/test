require('dotenv').config();  //run process.env
import express from "express";
import bodyParser from "body-parser"; //user?id
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './config/connectDB';



let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();


let port = process.env.PORT || 3000;
//Port === undefined => port =3000
app.listen(port, () => {
   //callback
   console.log("Backend Nodejs is running on port " + port)
})


