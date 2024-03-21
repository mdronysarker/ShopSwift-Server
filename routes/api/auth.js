const express = require("express");
const registrationController = require("../../controllers/registrationController");
const secureApi = require("../../middleware/secureApi");
const route = express.Router();

route.get("/registration", secureApi, registrationController);

// mongodb+srv://ShopSwift:eq0hN2anBkli39y8@cluster0.rsfnkpj.mongodb.net/ShopSwift-server?retryWrites=true&w=majority&appName=Cluster0

module.exports = route;
