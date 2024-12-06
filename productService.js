const productRepository = require('../repositories/productRepository');

exports.getAllProducts = async () => {
    return await productRepository.getAll();
};

exports.createProduct = async (name, price) => {
    return await productRepository.add(name, price);
};

exports.updateProduct = async (id, name, price) => {
    return await productRepository.update(id, name, price);
};

exports.deleteProduct = async (id) => {
    return await productRepository.remove(id);
};
