const { app } = require("./app");

// Utils
const { sequelize } = require("./util/database");

sequelize
  .authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log("MoviesAPI running");
});
