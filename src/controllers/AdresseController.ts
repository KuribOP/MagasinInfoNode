import { CrudController } from "./CrudController"
import { Request, Response } from 'express';
import { Adresse } from "../models/AdresseModel";
import { Client } from "../models/ClientModel";

export class AdresseController extends
    CrudController {

    public read(req: Request, res: Response): void {
        Adresse.findAll({ include: Client }).then(adresses => res.json(adresses));
    }

    public create(req: Request, res: Response): void {
        Adresse.create(req.body).then(() => res.json("added to database"));
    }

    public update(req: Request, res: Response): void {
        Adresse.update(req.body, { where: { id_client: req.params.id } }).then(() => res.json("update done"));
    }

}