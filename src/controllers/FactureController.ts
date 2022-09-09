import { CrudController } from "./CrudController"
import { Request, Response } from 'express';
import { Facture } from "../models/FactureModel";

export class FactureController extends
    CrudController {

    public read(req: Request, res: Response): void {
        Facture.findAll().then(factures => res.json(factures));
    }

    public create(req: Request, res: Response): void {
        Facture.create(req.body).then(() => res.json("added to database"));
    }
}