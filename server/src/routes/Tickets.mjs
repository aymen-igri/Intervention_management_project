import { Router } from "express";
import { AddTicket, GetNumberTicketsByStatus, GetStatisticsForUser, GetTicketById, GetTickets, GetTicketsByUserId, UpdateTiket } from "../controllers/TicketsController.mjs";

const router = Router();
router.get('/getAllTickets',GetTickets);
router.get('/getTicket/:id',GetTicketById);
router.get('/getTiketsByUserId/:userId',GetTicketsByUserId);
router.get('/getNumberTiketsByStatus/:userId',GetNumberTicketsByStatus);
router.get('/getStatisticsForUser/:userId',GetStatisticsForUser);
router.post('/addTicket/:idUser',AddTicket);
router.patch('/updateTicket/:id',UpdateTiket);

export default router;