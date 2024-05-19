import express from 'express';
const { createScenario,getScenarioById, getAllScenarios, updateScenario, deleteScenario } = require('../controllers/scenario.controller');


const router = express.Router();

router.route('/post-scenario').post(createScenario);
router.route('/get-scenarios').get(getAllScenarios)

router.route('/scenario/:id')
    .get(getScenarioById)
    .patch(updateScenario)
    .delete(deleteScenario)

module.exports = router