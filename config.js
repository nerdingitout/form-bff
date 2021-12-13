require('dotenv').config();

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database:DB_NAME,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  },
  listPerPage: LIST_PER_PAGE || 10,
};

module.exports = config;
