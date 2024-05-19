import express from 'express';
const { createVehicle, getVehicleById, getAllVehicles,deleteVehicle } = require('../controllers/vehicle.controller');


const router = express.Router();

router.route('/post-vehicle/:id').post(createVehicle);
router.route('/get-vehicles').get(getAllVehicles);

router.route('/vehicle/:id')
    .get(getVehicleById)
    // .patch(updateScenario)
    .delete(deleteVehicle)

module.exports = router