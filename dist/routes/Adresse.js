"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const AdresseController_1 = require("../controllers/AdresseController");
const adresseController = new AdresseController_1.AdresseController();
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/adresse', (req, res) => adresseController.read(req, res));
exports.router.post('/adresse/add', (req, res) => adresseController.create(req, res));
exports.router.put('/adresse/update/:id', (req, res) => adresseController.update(req, res));
