// Require express router

const router = require("express").Router();

//Import all API routes
const apiRoutes=require('./api');


const userRoutes = require("./user-routes");


const thoughtRoutes = require("./thought-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
