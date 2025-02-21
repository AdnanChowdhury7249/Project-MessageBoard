const express = require('express');

const router = express.Router();
const messageController = require('../controllers/messageControllers'); // ✅ Import controller

router.get('/', messageController.getAllMessages);

module.exports = router;
