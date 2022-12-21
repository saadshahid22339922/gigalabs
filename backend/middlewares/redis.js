import { serverErrorResponse } from "../utils/response";
import redisClient from "../redis-client";
import mongoose from "mongoose";

const checkRedis = async (req, res, next) => {
	try {
		const { id } = req.params;
		let data = await redisClient.get(
			JSON.stringify(mongoose.Types.ObjectId(id))
		);
		if (!data) {
			console.log("### FETCHING FROM DB ...");
			return next();
		}
		console.log("### FETCHING FROM REDIS ...");
		return res
			.status(200)
			.send({ status: 200, message: "post.found", data: JSON.parse(data) });
	} catch (error) {
		return serverErrorResponse(res, error);
	}
};

const checkAllRedis = async (req, res, next) => {
	try {
		let data = await redisClient.keys("*");
		if (!data) {
			console.log("### FETCHING FROM DB ...");
			return next();
		}
		let postArr = [];
		data.forEach((post) => {
			postArr.push(redisClient.get(post));
		});
		let resArr = (await Promise.all(postArr)).map((item) => {
			return JSON.parse(item);
		});

		console.log("### FETCHING FROM REDIS ...");
		return res
			.status(200)
			.send({ status: 200, message: "post.found", data: resArr });
	} catch (error) {
		return serverErrorResponse(res, error);
	}
};

export { checkRedis, checkAllRedis };
