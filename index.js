import { config } from "dotenv";
config();

import ExpressServer from "./configs/server.js";

const server = ExpressServer();
server.listen();