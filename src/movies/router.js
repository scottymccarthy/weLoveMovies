const router = require("express").Router({ mergeParams: true });
const controller = require("./controller");
const reviewsRouter = require("../reviews/router");
const theaterRouter = require("../theaters/router");
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:movieId").get(controller.read).all(methodNotAllowed);

router.use("/:movieId/reviews", reviewsRouter).all(methodNotAllowed);
router.use("/:movieId/theaters", theaterRouter).all(methodNotAllowed);

module.exports = router;
