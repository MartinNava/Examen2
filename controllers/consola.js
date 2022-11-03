const path = require('path');
const Examen = require('../utils/database').models.examen;

exports.getAPI = (request, response) => {
    response.send("API Correcta")
}

exports.getTable = (request, response) => {
    Examen.findAll()
    .then((examen) => {
        console.log("Examen", examen);
        response.send(examen)
    })
    .catch((error) => {
        console.log(error);
        response.send('Error')
    })
}

exports.postAltaRegistro = (request, response) => {
    console.log(request.body);
    Examen.create(request.body)
        .then((result) => {
            console.log("Registro exitoso");
            response.send("Registro exitoso");
        })
        .catch((error) => {
            console.log(error);
            response.send("Error")
        })
}