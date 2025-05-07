const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
  bookedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reservation', reservationSchema);
