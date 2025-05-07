const Reservation = require('../models/Reservation');
const Activity = require('../models/Activity');

// Book an activity
exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;
  const userId = req.user;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });

    const reservation = new Reservation({ user: userId, activity: activityId });
    await reservation.save();
    res.status(201).json({ message: 'Activity booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error booking activity' });
  }
};

// Get user bookings
exports.getMyBookings = async (req, res) => {
  const userId = req.user;

  try {
    const reservations = await Reservation.find({ user: userId }).populate('activity');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};
