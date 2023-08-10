import express from 'express';
import cors from 'cors';

import AuthRoutes from './routes/AuthRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    res.send("Hello World");
});

app.use('/api/auth', AuthRoutes);

app.listen(3000, () => console.log('Server Running: localhost:3000'));