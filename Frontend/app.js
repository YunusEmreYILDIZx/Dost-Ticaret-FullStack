const express = require("express");
//const db = require("./database/config/DBConfig.js");
const app = express();
const PORT = 5006;

app.use(express.static('public'));
//db.sequelize.sync().then(() => {
//  console.log("Database synced successfully.");
//});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
