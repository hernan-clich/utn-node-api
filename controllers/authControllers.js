const User = require('../models/usuarios');

const handleErrors = err => {
    let errores = { email: '', password: '' };

    Object.values(err.errors).forEach(err => {
        errores[err.properties.path] = err.properties.message;
    });
    return errores;
}

module.exports = {
    login_post: async (req, res) => {        
        const {email, password} = req.body;
        
        try {
            const usuario = await User.login(email, password);
            res.status(200).json({ usuario });
        }
        catch (err) {
            console.log(err);
        }
    },
    signup_post: async (req, res) => {
        try {
            const userEmail = await User.findOne({email: req.body.email});
            if(!userEmail){
                const usuario = new User(req.body);
                const data = await usuario.save();
                res.status(200).json(data);
            } else {
                console.log('El usuario ya existe');
            }

        }
        catch (err) {
            console.log(handleErrors(err));
        }
    }
}