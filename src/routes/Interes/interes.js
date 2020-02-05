const express = require('express');
const route = express.Router();
const interes = require("../../controllers/Interes/Interes")
route.post("/interes",interes.calculoInteres)
route.post("/tasa_interes",interes.calculoTasaInteres)
route.post("/tiempo",interes.calculoTiempo)
route.post("/capital",interes.calculoCapital)
module.exports = route;
