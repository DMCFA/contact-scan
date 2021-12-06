import express from "express";
import mysql from "mysql";

import { PORT } from "./utils/config.js";
console.log(PORT);

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
