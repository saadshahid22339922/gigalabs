import ROUTES from "../config/routes";

const get = async ({ url, id = null, auth = true }) => {
	try {
		let headers = {};
		if (auth) {
			headers["Authorization"] = `Bearer ${token}`;
		}

		let newurl = url;
		if (id) newurl = newurl + "/" + id;

		let promise = await fetch(`${ROUTES.BASE_URL}/${newurl}`, {
			method: "GET",
			headers,
		});
		if (promise.status === 200) {
			let res = await promise.json();
			return res;
		} else return null;
	} catch (error) {
		console.log("GET ", error);
		return null;
	}
};

const post = async ({ url, body, isFormData = false, auth = true }) => {
	try {
		let headers = {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		};
		if (auth) {
			headers["Authorization"] = `Bearer ${token}`;
		}

		let promise = await fetch(`${ROUTES.BASE_URL}/${url}`, {
			method: "POST",
			headers,
			body: isFormData ? body : JSON.stringify(body),
		});
		if (promise.status === 200) {
			let res = await promise.json();
			return res;
		} else return null;
	} catch (error) {
		console.log("POST ", error);
		return null;
	}
};

const put = async ({ url, id = null, body = {}, auth = true }) => {
	try {
		console.log("BODY ", body);
		let headers = {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		};
		if (auth) {
			headers["Authorization"] = `Bearer ${token}`;
		}

		let promise = await fetch(
			id ? `${ROUTES.BASE_URL}/${url}/${id}` : `${ROUTES.BASE_URL}/${url}`,
			{
				method: "PATCH",
				headers,
				body: JSON.stringify(body),
			}
		);
		if (promise.status === 200) {
			let res = await promise.json();
			return res;
		} else return null;
	} catch (error) {
		console.log("GET ", error);
		return null;
	}
};

const FETCH = { get, post, put };
export default FETCH;
