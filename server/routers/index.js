const Router = require('express').Router;
const router = new Router();

const APIController = require('../controllers/api-controllers');

router.post('/api', APIController.API);

module.exports = router;