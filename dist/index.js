"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const Client_1 = require("./routes/Client");
const Facture_1 = require("./routes/Facture");
const Adresse_1 = require("./routes/Adresse");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:8000'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/client', Client_1.router);
app.post('/client/add', Client_1.router);
app.put('/client/update/:id', Client_1.router);
app.get('/adresse', Adresse_1.router);
app.post('/adresse/add', Adresse_1.router);
app.put('/adresse/update/:id', Adresse_1.router);
app.get('/facture', Facture_1.router);
app.post('/facture/add', Facture_1.router);
app.get("/", (req, res) => res.send("Hello world!"));
app.listen(constants_1.PORT, () => {
    console.log('Server is running fine on PORT: ' + constants_1.PORT + ' dw about it');
});
