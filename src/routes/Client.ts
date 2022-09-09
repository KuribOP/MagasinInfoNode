import express, { Request, Response } from 'express';
import { ClientController } from '../controllers/ClientController';

const clientController = new ClientController();

export const router = express.Router({
    strict: true
});

router.get('/client', (req: Request, res: Response) => clientController.read(req, res));
router.post('/client/add', (req, res) => clientController.create(req, res));
router.put('/client/update/:id', (req, res) => clientController.update(req, res));