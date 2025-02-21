#!/usr/bin/env node
require('dotenv').config({ path: '../.env' });
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  date_added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message) 
VALUES 
  ('Bryan', 'first message'),
  ('Odin', 'second message'),
  ('Damon', 'third message');
`;

async function main() {
  console.log('Seeding database...');

  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.end();
  }
}

main();
