"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const ClientController_1 = require("../controllers/ClientController");
const clientController = new ClientController_1.ClientController();
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/client', (req, res) => clientController.read(req, res));
exports.router.post('/client/add', (req, res) => clientController.create(req, res));
exports.router.put('/client/update/:id', (req, res) => clientController.update(req, res));
