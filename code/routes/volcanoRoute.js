const { Router } = require('express');
const { volcanoC } = require('../controllers');
const router = Router();

router.get("", volcanoC.getVolcanos);
router.post("", volcanoC.createVolcano);

module.exports = router;