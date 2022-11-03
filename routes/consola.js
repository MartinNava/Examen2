const express = require('express');
const router = express.Router();
const consoleController = require('../controllers/consola');

router.get('/', consoleController.getAPI);

router.get('/getTables', consoleController.getTable);

router.post('/altaRegistro', consoleController.postAltaRegistro);

module.exports = router;