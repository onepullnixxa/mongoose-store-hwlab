// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const app = express();
require("dotenv").config();

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// DATABASE CONNECTION ERROR/SUCCESS
// DEFINE CALLBACK FUNCTIONS FOR VARIOUS EVENTS
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

const productsController = require('./controllers/product.js');
app.use("/products", productsController);



// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));