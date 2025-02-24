const pool = require('./pool');

async function postMessage(username, message) {
  const query = `
  INSERT INTO messages (username, message, date_added)
  VALUES($1, $2, NOW())
  RETURNING *;
  `;
  try {
    const result = await pool.query(query, [username, message]);
    return result.rows[0];
  } catch (error) {
    console.error('Error inserting message:', error);
    throw error;
  }
}

async function AllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
}

async function getDeleteMessage(id) {
  const { rowCount } = await pool.query('delete FROM messages WHERE id = $1', [id]);
  if (rowCount === 0) {
    return null;
  }
  return 'message successfully deleted';
}

module.exports = {
  postMessage, AllMessages, getMessageById, getDeleteMessage,
};
