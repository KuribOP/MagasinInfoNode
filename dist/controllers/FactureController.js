"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureController = void 0;
const CrudController_1 = require("./CrudController");
const FactureModel_1 = require("../models/FactureModel");
class FactureController extends CrudController_1.CrudController {
    read(req, res) {
        FactureModel_1.Facture.findAll().then(factures => res.json(factures));
    }
    create(req, res) {
        FactureModel_1.Facture.create(req.body).then(() => res.json("added to database"));
    }
}
exports.FactureController = FactureController;
