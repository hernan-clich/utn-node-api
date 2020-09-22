const Product = require('../models/productos');

module.exports = {
    index_get: (req, res) => {
        res.redirect('/productos')
    }, 
    productos_get: async (req, res) => {
        try {
            const data = await Product.find();
            res.json(data);
        }
        catch (err) {
            console.log(err);
        }
    },
    productos_post: async (req, res) => {
        try {
            const producto = new Product(req.body);
            const data = await producto.save();
            res.json(data);
        }
        catch (err) {
            console.log(err);
        }
    },
    productos_id_get: (req, res) => {
        const id = req.params.id;
        Product.findById(id)
            .then(result => res.json(result))
            .catch(err => console.log("Item no existe en db"));
    }
}