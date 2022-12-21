const serverErrorResponse = (resp, error) => {
	console.log("SERVER.ERROR ", error);
	return resp.status(500).send({
		message: "internal.server.error",
		error: error.toString(),
	});
};

const successResponse = ({ message, data }) => {
	return {
		status: 200,
		message,
		data,
	};
};

export { serverErrorResponse, successResponse };
