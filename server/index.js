import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { PORT, MONGODB_CONNECTION } from './utils/config.js';
import router from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGODB_CONNECTION)
  .then((result) =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => console.log(error));

app.use('/api', router);
