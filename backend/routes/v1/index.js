import { Router } from "express";
import UserRoutes from "./user.routes";
import PostRoutes from "./post.routes";

const { ValidationError } = require("express-validation");

const routeSetup = (app) => {
	const router = Router();

	// Service Routes with Prefix
	router.use("/user", UserRoutes);
	router.use("/post", PostRoutes);

	// This Line Should Be Added at Last
	app.use("/api/v1", router);

	// Request Validation Exception Handler
	app.use(function (err, req, res, next) {
		console.log("ERROR ", err);
		if (err instanceof ValidationError)
			return res.status(err.statusCode).json(err);
		return res.status(500).json(err);
	});
};

export default routeSetup;
