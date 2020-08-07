const { Router } = require('express');
const { eruptionC } = require('../controllers');
const { getEruptionsCache } = require('../middlewares/cacheMiddleware');
const router = Router();

router.get("", getEruptionsCache, eruptionC.getEruptions);

module.exports = router;