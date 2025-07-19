import { Router } from "express";
import { AddComment } from "../controllers/CommentsController.mjs";

const router = Router();
//technician
router.post('/addComment/:tickId',AddComment);

export default router;