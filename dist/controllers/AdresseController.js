"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdresseController = void 0;
const CrudController_1 = require("./CrudController");
const AdresseModel_1 = require("../models/AdresseModel");
const ClientModel_1 = require("../models/ClientModel");
class AdresseController extends CrudController_1.CrudController {
    read(req, res) {
        AdresseModel_1.Adresse.findAll({ include: ClientModel_1.Client }).then(adresses => res.json(adresses));
    }
    create(req, res) {
        AdresseModel_1.Adresse.create(req.body).then(() => res.json("added to database"));
    }
    update(req, res) {
        AdresseModel_1.Adresse.update(req.body, { where: { id_client: req.params.id } }).then(() => res.json("update done"));
    }
}
exports.AdresseController = AdresseController;
