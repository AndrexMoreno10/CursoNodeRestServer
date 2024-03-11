
const {response, request} = require('express')

const getUsers = (req = request, res  = response) => {

    const {q , nombre = 'No Name' , apikey , page = 1 , limit} = req.query;

    res.status(403).json({
        "msg": "'Get API - Controller",
        q , nombre , apikey , page , limit
    });

}


const postUsers = (req, res) => {
const {nombre , edad , apellido , id} = req.body;  //es el body o esquema que nos mandan, pero entonces desestructuramos el body

    res.status(201).json({
        "msg" : "'Post API - Controller",
        id , nombre , apellido , edad  
    });
}

const putUsers = (req, res) => {

    const id = req.params.id;


    res.status(400).json({
        "msg" : "'Put API - Controller",
        id
    });
}


const deleteUsers = (req, res) => {
    res.status(403).json({
        "msg" : "'Delete API - Controller"
    });
}


module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}