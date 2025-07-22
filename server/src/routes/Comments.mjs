import { Router } from "express";
import { AddComment , GetComment} from "../controllers/CommentsController.mjs";

const router = Router();
//Admin
router.get('/getComments/:tickId',GetComment)
//technician
router.post('/addComment/:tickId',AddComment);

export default router;