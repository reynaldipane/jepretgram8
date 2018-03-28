const express = require('express');
const router  = express.Router();
const users   = require('./users')
const posts   = require('./posts')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/users', users)
router.use('/api/posts', posts)
module.exports = router;
