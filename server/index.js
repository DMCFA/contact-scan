import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { PORT, MONGODB_CONNECTION } from './utils/config.js';
import { info } from './utils/logger.js';
import router from './routes/contacts.js';

const app = express();

app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(MONGODB_CONNECTION)
  .then((result) =>
    app.listen(PORT, () => info(`server running on port ${PORT}`))
  )
  .catch((error) => info(error));

app.use('/api', router);

export default app;
