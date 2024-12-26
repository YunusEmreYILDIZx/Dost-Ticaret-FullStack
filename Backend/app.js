// const express = require("express");
const db = require("./config/DBConfig.js");
// const app = express();
// const PORT = 5007;

// app.use(express.static('public'));
// db.sequelize.sync().then(() => {
//   console.log("Database synced successfully.");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const stokRoutes = require("./routes/StokRoutes.js"); // Route dosyasını import edin

const app = express();
app.use(express.json()); // JSON desteği için
app.use("/", stokRoutes); // Stok route'unu bağlayın
db.sequelize.sync().then(() => {
console.log("Database synced successfully.");
});
const PORT = 5007;
app.listen(PORT, () => {
  console.log('Server running on http://localhost:5007');
});