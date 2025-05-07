const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/reservationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/book', authMiddleware, bookActivity);
router.get('/', authMiddleware, getMyBookings);

module.exports = router;
