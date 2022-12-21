import Joi from "joi";

const create = {
	body: Joi.object({
		firstName: Joi.string().required(),
		lastName: Joi.string(),
		userName: Joi.string().required(),
		email: Joi.string().required(),
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
		firstName: Joi.string(),
		lastName: Joi.string(),
		userName: Joi.string(),
		email: Joi.string(),
	}),
};

export default { create, get, update };
