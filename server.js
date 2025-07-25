import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
// config dotenv
dotenv.config();

// database config
connectDB();

// config colors
colors.enable();

//rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// rest api 
app.get("/", (req,res) => {
    res.send('<h1>welcome to ecommerce app</h1>');
});



// PORT
const PORT = process.env.PORT || 8003;

// app listen
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} http://localhost:${PORT}`.bgMagenta.red);
});
