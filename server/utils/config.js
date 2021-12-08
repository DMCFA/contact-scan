import dotenv from 'dotenv';
dotenv.config();

export let PORT = process.env.PORT || 3001;
export let MONGODB_CONNECTION =
  process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;
