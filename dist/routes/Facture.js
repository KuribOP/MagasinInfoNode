"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const FactureController_1 = require("../controllers/FactureController");
const factureController = new FactureController_1.FactureController();
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/facture', (req, res) => factureController.read(req, res));
exports.router.post('/facture/add', (req, res) => factureController.create(req, res));
