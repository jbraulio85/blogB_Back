import { config } from "dotenv";
config();

import ExpressServer from "./configs/server";

const server = new ExpressServer();
server.listen();