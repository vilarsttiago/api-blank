import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ListUsersController } from "./controllers/ListUsersController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";


export const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();

router.post('/users', createUserController.handle);
router.get('/users', ensureAdmin, listUsersController.handle);
router.post('/login', authenticateUserController.handle);