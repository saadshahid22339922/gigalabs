import FETCH from "../utils/fetch";
import ROUTES from "../config/routes";

const fetchAll = async () => {
	let res = await FETCH.get({ url: ROUTES.USER_ALL });
	return res;
};

const updateUser = async (body) => {
	let res = await FETCH.put({
		url: `${ROUTES.USER_PATCH}/${body.id}`,
		body,
	});
	return res;
};

const fetchUser = async (id) => {
	let res = await FETCH.get({ url: `${ROUTES.USER_GET}/${id}` });
	return res;
};

const createUser = async (id, body) => {
	let res = await FETCH.post({ url: `${ROUTES.USER_POST}`, body });
	return res;
};

const USER_API = {
	fetchAll,
	updateUser,
	fetchUser,
	createUser,
};

export default DASHBOARD_API;
