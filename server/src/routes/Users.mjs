import { Router } from "express";
import { UpdateConn, UpdateData ,GetUsersAssign, GetAllUsers, AddUser, UpdateUserRole, BanUser, GetUsersDashboard} from "../controllers/UsersController.mjs";

const router = Router();
// all the roles
router.patch('/updateInfo/:id',UpdateData);
router.patch('/updateConn/:id',UpdateConn);
// admin
router.get('/getUsersAssign', GetUsersAssign);
router.get('/getAllUsers', GetAllUsers);
router.get('/getAllUsersForDashboard', GetUsersDashboard)
router.post('/AddUser',AddUser);
router.patch('/updateRole/:id',UpdateUserRole);
router.patch('/banUser/:id',BanUser)
export default router;