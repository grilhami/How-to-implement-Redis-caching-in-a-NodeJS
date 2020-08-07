const { Router } = require('express');
const { eruptionC} = require('../controllers');
const router = Router();

router.get("", eruptionC.getEruptions);

module.exports = router;