import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path'

const app = express();
app.use(cors());
/**
 * app.use(cors({}));
 * 
*/

//Habilita o reconhecimento de Json como objeto
app.use(express.json());
app.use(routes);
//Servindo arquivos estaticos na apicação
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));
app.listen(3535);