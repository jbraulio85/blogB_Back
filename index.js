import { config } from "dotenv";
config();

import ExpressServer from "./configs/server.js";

const server = new ExpressServer();
server.listen();