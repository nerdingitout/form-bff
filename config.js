//require('dotenv').config();

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  },
  listPerPage: 1000,
};

module.exports = config;
