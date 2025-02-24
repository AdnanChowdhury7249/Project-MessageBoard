const express = require('express');
const messageController = require('../controllers/messageControllers');

const router = express.Router();
// const { v4: uuidv4 } = require('uuid');
// const messages = require('../db');

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', messageController.newMessagePost);
router.get('/detail/:id', messageController.getMessageById);
router.get('/delete/:id', messageController.deleteMessage);

module.exports = router;
