import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "users",
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		strict: true,
	}
);

export default mongoose.model("posts", PostSchema);
