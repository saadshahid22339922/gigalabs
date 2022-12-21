import { Router } from "express";
const router = Router();
import { UserService } from "../../services/v1";
import { validate } from "express-validation";
import { serverErrorResponse } from "../../utils/response";
import UserValidator from "../../validators/user.validator";

router.post("/", validate(UserValidator.create), async (req, res) => {
	try {
		let data = await UserService.create(req.body);
		res.status(data.status).send(data);
	} catch (error) {
		return serverErrorResponse(res, error);
	}
});

router.get("/:id", validate(UserValidator.get), async (req, res) => {
	try {
		let data = await UserService.get(req.params);
		res.status(data.status).send(data);
	} catch (error) {
		return serverErrorResponse(res, error);
	}
});

router.patch("/:id", validate(UserValidator.update), async (req, res) => {
	try {
		let data = await UserService.update(req.params, req.body);
		res.status(data.status).send(data);
	} catch (error) {
		return serverErrorResponse(res, error);
	}
});

router.get("/", async (req, res) => {
	try {
		let data = await UserService.getAll(req.query);
		res.status(data.status).send(data);
	} catch (error) {
		return serverErrorResponse(res, error);
	}
});

export default router;
