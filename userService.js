const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async () => {
    return await userRepository.getAll();
};

exports.createUser = async (name, email) => {
    return await userRepository.add(name, email);
};

exports.updateUser = async (id, name, email) => {
    return await userRepository.update(id, name, email);
};

exports.deleteUser = async (id) => {
    return await userRepository.remove(id);
};
