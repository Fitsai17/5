const productModel = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await productModel.getProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        const newProduct = await productModel.addProduct(name, price);
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        const updatedProduct = await productModel.updateProduct(id, name, price);
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productModel.deleteProduct(id);
        res.json(deletedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};
