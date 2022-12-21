import Joi from "joi";

const create = {
	body: Joi.object({
		userId: Joi.string().required(),
		title: Joi.string().required(),
		content: Joi.string().required(),
	}),
};

const get = {
	params: Joi.object({
		id: Joi.string().required(),
	}),
};

const update = {
	params: Joi.object({
		id: Joi.string().required(),
	}),
	body: Joi.object({
		title: Joi.string(),
		content: Joi.string(),
	}),
};

export default { create, get, update };
