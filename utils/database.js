const Sequelize = require('sequelize');

const sequelize = new Sequelize('examen_MNA', 'admin', 'Suzzanita1712.', {
    dialect: 'mysql',
    host: 'database-1.cbmah0puxamn.us-east-1.rds.amazonaws.com',
    dialectOptions: {
        options: {
            //Características especiales de la conexión
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

const modelDefiners = [
    require('../models/examen')
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

/* const Examen = sequelize.define('examen', {
    //Atributos
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    localizacion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rate: {
        type: Sequelize.STRING,
        allowNull: false
    }
}); */

module.exports = sequelize;