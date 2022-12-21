import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		userName: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
		strict: true,
	}
);

export default mongoose.model("users", UserSchema);
