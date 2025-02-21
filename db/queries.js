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
module.exports = { postMessage, AllMessages };
