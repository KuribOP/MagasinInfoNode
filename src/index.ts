import 'dotenv/config';

import express from 'express';
import { PORT } from './config/constants';
import { router as clientRouter } from './routes/Client';
import { router as factureRouter } from './routes/Facture';
import { router as adresseRouter } from './routes/Adresse';
import cors from 'cors';

const app = express();
const allowedOrigins = ['http://localhost:8000'];


const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors());
app.use(express.json());

app.get('/client', clientRouter);
app.post('/client/add', clientRouter);
app.put('/client/update/:id', clientRouter);

app.get('/adresse', adresseRouter);
app.post('/adresse/add', adresseRouter);
app.put('/adresse/update/:id', adresseRouter);

app.get('/facture', factureRouter);
app.post('/facture/add', factureRouter);

app.get("/", (req, res) => res.send("Hello world!"));

app.listen(PORT, () => {
    console.log('Server is running fine on PORT: ' + PORT + ' dw about it');
});