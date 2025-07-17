import { Router } from "express";
import { AddTicket, GetTickets, UpdateTiket } from "../controllers/TicketsController.mjs";

const router = Router();
router.get('/getAllTickets',GetTickets);
router.post('/addTicket/:idUser',AddTicket);
router.patch('/updateTicket/:id',UpdateTiket);

export default router;