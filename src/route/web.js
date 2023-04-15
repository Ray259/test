import express from "express";  
import homecontrollers from "../controllers/homecontrollers";

let router = express.Router();

let initWebRoutes = (app) => {

    // router.get('/', (req, res) => {
    //     return res.send('Hello World!')
    // });

    router.get('/', homecontrollers.getHomePage);
    router.get('/about', homecontrollers.getAbout); 
    //rest api

    return app.use("/",router);
}

module.exports = initWebRoutes;
