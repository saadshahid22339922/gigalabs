import { User } from "../../models";
import { successResponse } from "../../utils/response";

const create = async ({ firstName, lastName, email, userName }) => {
	try {
		let doc = await User.create({ firstName, lastName, email, userName });
		return successResponse({ message: "user.created", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

const get = async ({ id }) => {
	try {
		let doc = await User.findOne({ _id: id });
		return successResponse({ message: "user.found", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

const update = async ({ id }, { firstName, lastName, email, userName }) => {
	try {
		let doc = await User.findOneAndUpdate(
			{ _id: id },
			{ firstName, lastName, email, userName },
			{ new: true }
		);
		return successResponse({ message: "user.updated", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

const getAll = async ({ limit = 10, page = 0 }) => {
	try {
		let doc = await User.find({})
			.skip(limit * page)
			.limit(limit)
			.sort("-createdOn");
		return successResponse({ message: "user.found", data: doc });
	} catch (error) {
		return Promise.reject(error);
	}
};

export default { create, get, update, getAll };
