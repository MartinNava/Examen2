const express = require('express');
const sequelize = require('./utils/database');
const path = require('path');
const consoleRoutes = require('./routes/consola');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', consoleRoutes);

sequelize.sync().then(() => {
    console.log('Conexión exitosa');
    app.listen(8080, () => {
        console.log('Servidor en línea');
    });
}).catch((error) => {
    console.log(error)
});