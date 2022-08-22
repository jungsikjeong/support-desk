const express = require('express');
const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticketController');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

// 노트 라우터로 재라우팅
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter); // /api/tickets/:ticketId/notes

router.route('/').get(protect, getTickets).post(protect, createTicket);

router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
