import mongoose from "mongoose";
import keys from "./keys";

console.log('KEYS ', keys.mongodb)
mongoose.set("strictQuery", false);
mongoose.connect(keys.mongodb, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	//   useCreateIndex: true,
	//   useFindAndModify: false,
});

export default mongoose.connection;
