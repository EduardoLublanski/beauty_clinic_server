import express from "express"
import "dotenv/config.js"
import cors from "cors"
import tieControllersToServer from "./routes/routes.js";

const server = express();
server.use(cors());
server.use(express.json());
tieControllersToServer('/api/v1/clinic', server);

const SERVER_PORT = process.env.SERVER_PORT;
server.listen(SERVER_PORT, () => console.log("server express initiated on port "+SERVER_PORT));