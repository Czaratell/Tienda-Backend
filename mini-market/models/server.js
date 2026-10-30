import express from "express";
import 'dotenv/config';
import cors from 'cors'
import router from "../routes/users.js";
export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.middleware();
        this.usuariosPath = '/api/usuarios';
    }
//segundo metodo de mi clase que se ejecuta al iniciar el servidor
    routes() {
       this.app.use (this.usuariosPath, router);

    }

//Metodo tres de mi clase server
middleware(){
    this.app.use(cors());
    this.app.use(express.static('public'));
    this.app.use(express.json());
}

// primer metodo que se ejecuta al iniciar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`corriendo en el puerto:${this.port}`);});
    }
}


export default Server;