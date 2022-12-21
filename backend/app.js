import redisClient from "./redis-client";
import express from "express";
import logger from "morgan";
import routeSetup from "./routes/v1";
import cors from "cors";
require("dotenv").config();
require("./config/db-mongo");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));
app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routeSetup(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", async (req, res) => {
	return res.status(200).send({
		message: "Welcome to the beginning xyz.GET",
	});
});

// module.exports = app;
export default app;
