const setStoage = (body, cb = null) => {
	try {
		let user = JSON.stringify(body);
		localStorage.setItem("efuse_user", user);
		if (cb) cb("/");
		else return true;
	} catch (error) {
		return null;
	}
};

const getStorage = (cb = null) => {
	try {
		let user = localStorage.getItem("efuse_user");
		// if (!user) cb();
		return JSON.parse(user);
	} catch (error) {
		return null;
	}
};

const getToken = (cb) => {
	try {
		let user = getStorage(cb);
		return user.token;
	} catch (error) {
		cb();
	}
};

const logout = (cb) => {
	try {
		localStorage.removeItem("efuse_user");
		cb("/");
	} catch (error) {
		return false;
	}
};

const STORAGE = { setStoage, getStorage, logout, getToken };

export default STORAGE;
