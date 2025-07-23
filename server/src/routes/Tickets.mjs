import { Router } from "express";
import { AddTicket, assignTick, closeTicket, getCartStatisticsForAdmin, GetNumberTicketsByStatusTech, GetNumberTicketsByStatusUser, GetStatisticsForAdmin, GetStatisticsForTech, GetStatisticsForUser, GetTicketById, GetTickets, GetTicketsByTechId, GetTicketsByUserId, updateTicketPriority, updateTicketStatus, UpdateTiket } from "../controllers/TicketsController.mjs";

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
router.get('/getStatisticForCards',getCartStatisticsForAdmin);
router.get('/getStatisticsForAdmin',GetStatisticsForAdmin);
router.patch('/updatePriority/:id',updateTicketPriority);
router.patch('/closeTicket/:id',closeTicket);
router.patch('/AssingTicketToTech/:id',assignTick)

export default router;