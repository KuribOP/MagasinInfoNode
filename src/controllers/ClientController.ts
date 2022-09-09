import { CrudController } from "./CrudController"
import { Request, Response } from 'express';
import { Client } from "../models/ClientModel";
import { Adresse } from "../models/AdresseModel";

export class ClientController extends
    CrudController {

    public read(req: Request, res: Response): void {
        Client.findAll({ include: Adresse }).then(clients => res.json(clients));
    }

    public create(req: Request, res: Response): void {
        Client.create(req.body).then(() => res.json("added to database"));
    }

    public update(req: Request, res: Response): void {
        Client.update(req.body, { where: { id_client: req.params.id } }).then(() => res.json("update done"));
    }

}