const express = require('express');
const route = express.Router();
const interes = require("../../controllers/Interes/Interes")
route.post("/interes",interes.calculoInteres)
module.exports = route;
