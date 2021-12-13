//require('dotenv').config();

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

module.exports = config;
