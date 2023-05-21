const express = require('express');
const articleValidate = require('../validator/article');
const articleControl = require('../controller/article');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', articleControl.showIndex);
router.get('/editor', auth, articleControl.showEditor);
router.get('/editor/:articleId', auth, articleControl.showArticle);
router.get('/article/:articleId', auth, articleControl.showArticle);
router.post('/articles', auth, articleValidate.createArticle, articleControl.createArticle);

module.exports = router;
