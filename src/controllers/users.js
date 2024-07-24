const User = require('../models/user')

const getUsers = (request, response) => {
    //Get all users
}

const getUser = (request, response) => {
    //Get user
    const { user_id } = request.params;
    response.status(200);
    response.send(`User with id: ${user_id}`);
}

const createUser = (req, res) => {
    const data = req.body;
    User.create(data)
        .then(user => {
            res.status(201).send(user);
        })
        .catch(e => {
            res.status(500).send(e.message);
        });
}

const updateUser = (request, response) => {
    //Update user
}

const deleteUser = (request, response) => {
    //Delete user
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}