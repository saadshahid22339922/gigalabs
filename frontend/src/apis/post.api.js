import FETCH from "../utils/fetch";
import ROUTES from "../config/routes";

const fetchAll = async () => {
	let res = await FETCH.get({ url: ROUTES.POST_ALL });
	return res;
};

const updatePost = async (body) => {
	let res = await FETCH.put({
		url: `${ROUTES.POST_PATCH}/${body.id}`,
		body,
	});
	return res;
};

const fetchPost = async (id) => {
	let res = await FETCH.get({ url: `${ROUTES.POST_GET}/${id}` });
	return res;
};

const createPost = async (id, body) => {
	let res = await FETCH.post({ url: `${ROUTES.POST_POST}`, body });
	return res;
};

const POST_API = {
	fetchAll,
	updatePost,
	fetchPost,
	createPost,
};

export default DASHBOARD_API;
