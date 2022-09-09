"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const CrudController_1 = require("./CrudController");
const ClientModel_1 = require("../models/ClientModel");
const AdresseModel_1 = require("../models/AdresseModel");
class ClientController extends CrudController_1.CrudController {
    read(req, res) {
        ClientModel_1.Client.findAll({ include: AdresseModel_1.Adresse }).then(clients => res.json(clients));
    }
    create(req, res) {
        ClientModel_1.Client.create(req.body).then(() => res.json("added to database"));
    }
    update(req, res) {
        ClientModel_1.Client.update(req.body, { where: { id_client: req.params.id } }).then(() => res.json("update done"));
    }
}
exports.ClientController = ClientController;
