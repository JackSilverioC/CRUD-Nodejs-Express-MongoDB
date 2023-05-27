import app from "./app";
import "./database";
import { PORT } from "./config";

app.set("port", PORT);

app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")}`);
