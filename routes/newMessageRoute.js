const express = require('express');
const messageController = require('../controllers/messageControllers'); // ✅ Now matches the file name

const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const messages = require('../db');

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', messageController.newMessagePost);

router.get('/detail/:id', (req, res) => {
  const messageId = req.params.id;
  const message = messages.find((msg) => msg.id === messageId);
  if (!message) {
    return res.status(404).send('Message not found');
  }
  return res.render('detail', { message });
});

module.exports = router;
