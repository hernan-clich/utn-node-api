const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Este campo es requerido"],
    validate: [isEmail, "Ingresar un email válido"]
  },
  password: {
    type: String,
    required: [true, "Este campo es requerido"],
    minlength: [8, "Su contraseña debe contener por lo menos 8 caractéres"]
  }
});

userSchema.pre('save', async function(next){
  const sal = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, sal);
  next();
});

userSchema.statics.login = async function(email, password) {
  const usuario = await this.findOne({ email });
  if (usuario) {
    const auth = await bcrypt.compare(password, usuario.password);
    if (auth) {
      return usuario;
    }
    throw Error('Password Incorrecto');
  }
  throw Error('Email Incorrecto');
};

const User = mongoose.model('User', userSchema);
module.exports = User;