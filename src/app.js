if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");

const moviesRouter = require("./movies/router");
const reviewsRouter = require("./reviews/router");
const theatersRouter = require("./theaters/router");
const notFound = require("./utils/errors/notFound");
const errorHandler = require("./utils/errors/errorHandler");

const app = express();

const router = express.Router()
router.get('/', cors(), (req, res) => {
  res.json({ message:
  'Welcome! You can access the data using these routes: /movies, /reviews, /theaters, /reviews/:reviewId, /movies/:movieId, /movies/:movieId/theaters, and /movies/:movieId/reviews.'});
})

app.use('/', router);

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
