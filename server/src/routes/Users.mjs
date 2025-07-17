import { Router } from "express";
import { UpdateConn, UpdateData } from "../controllers/UsersController.mjs";

const router = Router();
router.patch('/updateInfo/:id',UpdateData);
router.patch('/updateConn/:id',UpdateConn);

export default router;