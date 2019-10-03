const express = require("express");
const multer = require("multer");
const uploadConfig = require('./config/upload');

const SessionController = require("./controllers/SessionController")
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig)



routes.post("/session",SessionController.Store);

routes.post("/spots",upload.single('thumbnail'),SpotController.Store)
routes.get("/spots", SpotController.Index);
routes.get("/dashboard", DashboardController.Show);
routes.post('/spots/:spot_id/bookings', BookingController.Store)

routes.get('/teste',(req,res)=>{
    return res.send("It Works!")
});


module.exports = routes;