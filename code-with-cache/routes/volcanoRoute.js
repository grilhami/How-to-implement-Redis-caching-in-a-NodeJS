const { Router } = require('express');
const { volcanoC } = require('../controllers');
const { getVolcanoCache } = require('../middlewares/cacheMiddleware');
const router = Router();

router.get("", getVolcanoCache, volcanoC.getVolcanos);
router.post("", volcanoC.createVolcano);

module.exports = router;