const express = require('express');
const articleControl = require('../controller/article');
const articleValidator = require('../validator/article');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', articleControl.showIndex);

router.get('/editor', articleControl.showEditor);
router.get('/editor/:articleId', articleControl.showArticle);

router.get('/article/:articleId', articleControl.showArticle);

module.exports = router;
