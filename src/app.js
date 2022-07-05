if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const moviesRouter = require("../src/movies/movies.router");
const theatersRouter = require("../src/theaters/theaters.router");
const reviewsRouter = require("../src/reviews/reviews.router");


const notFound = require("../src/errors/noFound"); 
const errorHandler = require("../src/errors/errorHandler");

app.use(cors())
app.use(express.json())


app.use("/movies", moviesRouter)
app.use("/theaters", theatersRouter)
app.use("/reviews", reviewsRouter)


app.use(notFound)
app.use(errorHandler)

module.exports = app;