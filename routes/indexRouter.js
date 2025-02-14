const express = require('express');
const router = express.Router();
const messages = require('../db');

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messaging Board', messages });
});

module.exports = router;
