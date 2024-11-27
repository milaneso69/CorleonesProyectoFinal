// index.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const servicioRoutes = require('./routes/servicioRoutes');
const productRoute = require('./routes/productRoute');
const empleadoRoutes = require('./routes/empleadoRoutes');
const ClienteRoutes = require('./routes/ClienteRoutes');
const citasRoute = require('./routes/citasRoute');
const saleRoutes = require('./routes/saleRoutes');
const swaggerDocs = require('./config/swagger');
// require('dotenv').config();

const app = express();
swaggerDocs(app);
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', servicioRoutes);
app.use('/api', productRoute);
app.use('/api', empleadoRoutes);
app.use('/api', ClienteRoutes);
app.use('/api', citasRoute);
app.use('/api', saleRoutes);

// const PORT = process.env.PORT || 7000;
app.listen(7000, () => {
  console.log('Servidor Corriendo en http://localhost:7000');
});

// Proyecto Integrador.