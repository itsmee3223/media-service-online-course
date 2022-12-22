require("dotenv").config();

const { DB_NAME, DB_PASSWORD, DB_USERNAME, DB_HOSTNAME, DB_PORT } = process.env;

module.exports = {
  development: {
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: "mysql",
  },
  test: {
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: "mysql",
  },
  production: {
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: "mysql",
  },
};
