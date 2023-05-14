const express = require('express');
const router = express.Router();
const articleControl = require('../controller/article');
const app = express();

// router.get('/', articleControl.showIndex);

app.use('/', require('./user'));
app.use('/', require('./article'));

module.exports = router;
