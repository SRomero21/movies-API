const express = require("express");
const { sequelize } = require("./util/database");

// Models

// Routes

// Utils

// Init app
const app = express();

app.use(express.json());
module.exports = { app };

// Run server
