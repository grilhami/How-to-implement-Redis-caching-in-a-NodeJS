const { Router } = require('express');
const { volcanoC } = require('../controllers');
const router = Router();

router.post("", volcanoC.createVolcano);

module.exports = router;