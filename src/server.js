import http from 'http';
import dotenv from 'dotenv';
import app from './app';

const server = http.createServer(app);

dotenv.config();
const { PORT } = process.env;

const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`muzi muzi happy server is listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start;
