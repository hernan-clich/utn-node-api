const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Este campo es requerido"]
  },
  precio: {
    type: Number,
    required: [true, "Este campo es requerido"]
  },
  codigo: {
    type: String,
    required: [true, "Este campo es requerido"]
  },
  descripcion: {
    type: String,
    required: [true, "Este campo es requerido"]
  },
  categoria: {
    type: String,
    required: [true, "Este campo es requerido"]
  }
});

const Product = mongoose.model('Product', prodSchema);
module.exports = Product;