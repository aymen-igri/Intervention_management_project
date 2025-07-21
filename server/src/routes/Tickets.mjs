import { Router } from "express";
import { AddTicket, GetNumberTicketsByStatusTech, GetNumberTicketsByStatusUser, GetStatisticsForTech, GetStatisticsForUser, GetTicketById, GetTickets, GetTicketsByTechId, GetTicketsByUserId, updateTicketPriority, updateTicketStatus, UpdateTiket } from "../controllers/TicketsController.mjs";

const router = Router();
//for user
router.get('/getAllTickets',GetTickets);
router.get('/getTicket/:id',GetTicketById);
router.get('/getTiketsByUserId/:userId',GetTicketsByUserId);
router.get('/getNumberTiketsByStatus/:userId',GetNumberTicketsByStatusUser);
router.get('/getStatisticsForUser/:userId',GetStatisticsForUser);
router.post('/addTicket/:idUser',AddTicket);
router.patch('/updateTicket/:id',UpdateTiket);
//for tichnician
router.get('/getTicketsByTechId/:techId',GetTicketsByTechId);
router.get('/getNumberTicketsByStatusTech/:userId',GetNumberTicketsByStatusTech);
router.get('/GetStatisticsForTech/:userId',GetStatisticsForTech);
router.patch('/updateTicketStatus/:id',updateTicketStatus);
//for admin
router.patch('/updatePriority/:id',updateTicketPriority);

export default router;