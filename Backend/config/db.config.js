const DB_CONFIG = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "1234", // Wrap the password in quotes to make it a string
  DB: "proje",
  dialect: "postgres",
  pool: {
    max: 3,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = DB_CONFIG;
