import express from 'express';
import getAllRoles from '../controllers/RolesControllers.mjs';

const router = express.Router();
router.get('/', getAllRoles);

export default router