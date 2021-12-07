import dotenv from "dotenv";
dotenv.config();

export let PORT = process.env.PORT || 3001;
export let MONGODB_CONNECTION = process.env.CONNECT_URI;
