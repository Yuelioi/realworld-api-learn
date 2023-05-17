const express = require('express');
const articleControl = require('../controller/article');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', articleControl.showIndex);
router.get('/editor', auth, articleControl.showEditor);
router.get('/editor/:articleId', auth, articleControl.showArticle);
router.get('/article/:articleId', auth, articleControl.showArticle);

module.exports = router;
