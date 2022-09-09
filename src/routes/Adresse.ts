import express, { Request, Response } from 'express';
import { AdresseController } from '../controllers/AdresseController';

const adresseController = new AdresseController();

export const router = express.Router({
    strict: true
});

router.get('/adresse', (req: Request, res: Response) => adresseController.read(req, res));
router.post('/adresse/add', (req, res) => adresseController.create(req, res));
router.put('/adresse/update/:id', (req, res) => adresseController.update(req, res));