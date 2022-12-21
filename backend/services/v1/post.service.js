import { Post } from "../../models";
import { successResponse } from "../../utils/response";
import redisClient from "../../redis-client";

const create = async ({ userId, title, content }) => {
	try {
		let doc = await Post.create({ user: userId, title, content });
		let docFetch = await Post.findOne({ _id: doc._id })
			.populate("user", "firstName lastName userName email")
			.exec();

		await redisClient.set(JSON.stringify(doc._id), JSON.stringify(docFetch));
		return successResponse({ message: "post.created", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

const get = async ({ id }) => {
	try {
		let doc = await Post.findOne({ _id: id })
			.populate("user", "firstName lastName userName email")
			.exec();
		return successResponse({ message: "post.found", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

const update = async ({ id }, { title, content }) => {
	try {
		let doc = await Post.findOneAndUpdate(
			{ _id: id },
			{ title, content },
			{ new: true }
		);
		let docFetch = await Post.findOne({ _id: id })
			.populate("user", "firstName lastName userName email")
			.exec();
		await redisClient.set(
			JSON.stringify(docFetch._id),
			JSON.stringify(docFetch)
		);
		return successResponse({ message: "post.updated", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

const getAll = async ({ limit = 10, page = 0 }) => {
	try {
		let doc = await Post.find({})
			.skip(limit * page)
			.limit(limit)
			.sort("-createdOn");
		return successResponse({ message: "post.found", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

export default { create, get, update, getAll };
