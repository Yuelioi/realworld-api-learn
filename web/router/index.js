const express = require('express');
const router = express.Router();

const app = express();

router.use('/', require('./user'));
router.use('/', require('./article'));

module.exports = router;
