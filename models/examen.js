const Sequelize = require('sequelize');

const Examen = (sequelize) => {
    sequelize.define('examen', {
        nombre: Sequelize.STRING,
        localizacion: Sequelize.STRING,
        rate: Sequelize.STRING,
    })
}

module.exports = Examen;