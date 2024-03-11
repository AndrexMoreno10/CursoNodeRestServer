const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userspath = '/api/users';

        //midlewares
        this.middlewares();

        //Rutas de mi Aplicacion
        this.routes();
    }

    middlewares(){

    //CORS
    this.app.use( cors() );

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio Publico
    this.app.use( express.static('public'));
    }

    routes() {

        this.app.use(this.userspath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port,() => {
            console.log('Servidor corrriendo en puerto',process.env.PORT);
        });
    }

}

module.exports = Server;