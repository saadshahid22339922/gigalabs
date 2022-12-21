import { Router } from "express";
const router = Router();
import { PostService } from "../../services/v1";
import { validate } from "express-validation";
import { serverErrorResponse } from "../../utils/response";
import { checkRedis, checkAllRedis } from "../../middlewares/redis";
import PostValidator from "../../validators/post.validator";

router.post("/", validate(PostValidator.create), async (req, res) => {
	try {
		let data = await PostService.create(req.body);
		res.status(data.status).send(data);
	} catch (error) {
		return serverErrorResponse(res, error);
	}
});

router.get(
	"/:id",
	validate(PostValidator.get),
	checkRedis,
	async (req, res) => {
		try {
			let data = await PostService.get(req.params);
			res.status(data.status).send(data);
		} catch (error) {
			return serverErrorResponse(res, error);
		}
	}
);

router.patch("/:id", validate(PostValidator.update), async (req, res) => {
	try {
		let data = await PostService.update(req.params, req.body);
		res.status(data.status).send(data);
	} catch (error) {
		return serverErrorResponse(res, error);
	}
});

router.get("/", checkAllRedis, async (req, res) => {
	try {
		let data = await PostService.getAll(req.query);
		res.status(data.status).send(data);
	} catch (error) {
		return serverErrorResponse(res, error);
	}
});

export default router;
