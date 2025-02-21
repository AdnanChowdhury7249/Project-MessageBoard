const db = require('../db/queries');

async function newMessagePost(req, res) {
  const { user, message } = req.body;

  if (!user || !message) {
    return res.status(400).send('Username and message is required');
  }

  try {
    const insertedMessage = await db.postMessage(user, message);
    console.log('Message inserted:', insertedMessage);

    res.redirect('/');
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).send('Error saving message');
  }
}

async function getAllMessages(req, res) {
  try {
    const displayMessages = await db.AllMessages();
    console.log('✅ Messages retrieved:', displayMessages);
    res.render('index', { title: 'Mini Messaging Board', messages: displayMessages });
  } catch (error) {
    console.error(' Error retrieving messages:', error);
    res.status(500).send('Error retrieving messages');
  }
}

module.exports = { newMessagePost, getAllMessages };
