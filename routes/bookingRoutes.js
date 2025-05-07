const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware'); // auth middleware

let bookings = []; // simulate database

// POST /api/bookings/:id — create a booking
router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { userId, date } = req.body;

    if (!userId || !date) {
        return res.status(400).json({ message: "Missing userId or date" });
    }

    const booking = {
        _id: bookings.length + 1,
        activity: {
            id,
            title: "Dummy Activity",
            description: "Dummy Description"
        },
        user: userId,
        date,
        createdAt: new Date()
    };

    bookings.push(booking);

    res.status(201).json({
        message: `Booking created for activity ${id}`,
        booking
    });
});

// GET /api/bookings/my — get bookings for logged-in user
router.get('/my', protect, (req, res) => {
    const userBookings = bookings.filter(b => b.user === req.user.id);
    res.json(userBookings);
});

module.exports = router;
