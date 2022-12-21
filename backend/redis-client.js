import * as redis from "redis";
const client = redis.createClient({
	url: "redis://redis:6379",
});

(async () => {
	await client.connect();
})();

client.on("connect", async () => {
	console.log("Connected!");
});
export default client;
