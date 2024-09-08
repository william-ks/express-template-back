import { app } from "./app";

app.listen(process.env.PORT, () => {
	// eslint-disable-next-line no-console
	console.log("\x1b[32m%s\x1b[0m", "😎 [server]: is running! (☞ﾟヮﾟ)☞");
});
