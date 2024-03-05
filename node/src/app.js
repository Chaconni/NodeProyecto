import express from 'express';
import {dirname, join} from "path";
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import {PORT} from './config.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);


app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(indexRouter);

app.listen(PORT);
console.log('Escuchando en el puerto 3333...')
