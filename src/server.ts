import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './database';

import { router } from './routes';

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});

app.listen(PORT, () => console.log(`Server is running (http://localhost:${PORT}/)`));