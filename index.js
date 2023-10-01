const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos el servidor
const app = express();

app.use(cors());

// Conectamos a la BD
conectarDB();

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(3000, () => {
    console.log('El servidor esta corriendo perfectamente')
})