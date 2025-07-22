import { Router } from "express";
import { UpdateConn, UpdateData ,GetUsersAssign} from "../controllers/UsersController.mjs";

const router = Router();
// all the roles
router.patch('/updateInfo/:id',UpdateData);
router.patch('/updateConn/:id',UpdateConn);

// admin
router.get('/getUsersAssign', GetUsersAssign);

export default router;