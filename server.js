// Requerir modulos, nro de puerto, router
const express = require('express');
const port = 4000;
const appRoutes = require('./routes/appRoutes');
const authRoutes = require('./routes/authRoutes');

//Coneccion a la DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productosDB', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Invocar Express App
const app = express();

// Middleware para  leer info JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);
app.use(authRoutes);

// Comienza a escuchar pedidos en puerto 4000
app.listen(port, () => console.log(`Server listening requests on port ${port}`));