import 'dotenv/config'; // apply env vars
import express from 'express';
import CharactersRouter from './characters/charcters.routes';

//config
//process.env.PORT --> the live server port
const PORT = process.env.PORT || 9876; 

//create the server
const server = express();

//config JSON support
server.use(express.json());

//using routes
server.use('/api/characters', CharactersRouter);

//run the server
server.listen(PORT, () => console.log(`[Server] http://localhost:${PORT}`));