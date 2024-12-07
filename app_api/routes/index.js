const express = require('express'); // Express app
const router = express.Router(); // Router Logic

//this is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip);

// GET Method routes tripsFindByCode - requires parameter
// PUT Methond routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;