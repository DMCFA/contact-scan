import express from "express";
import cors from "cors";

import { PORT } from "./utils/config.js";
console.log(PORT);

const app = express();

app.use(cors);

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
