import express, { Request, Response } from 'express';
import { FactureController } from '../controllers/FactureController';

const factureController = new FactureController();

export const router = express.Router({
    strict: true
});

router.get('/facture', (req: Request, res: Response) => factureController.read(req, res));
router.post('/facture/add', (req, res) => factureController.create(req, res));