import express from 'express';
import getAllRoles from '../controllers/RolesControllers.mjs';

const router = express.Router();

// GET /api/roles - Get all roles
router.get('/', getAllRoles);

export default router