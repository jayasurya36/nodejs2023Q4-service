const User = require('../models/user.model');
const bcrypt = require('bcrypt');
let userController = {}
userController.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err.message)
    }
}
userController.getUserById = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.params.id });
        if (user === null) { res.status(404).send('User not found'); }
        else res.status(200).send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

userController.createUser = async (req, res) => {
    try {
        if (req.body) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            let user = new User({
                ...req.body,
                password: hashedPassword
            })
            const returnVal = await user.save();
            res.status(201).send(returnVal)
        } else {
            res.status(400).send('request body cannot be empty')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}
userController.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            if (bcrypt.compare(req.body.oldPassword, user.password)) {
                const returnVal = await User.updateOne({ _id : req.params.id}, {
                    password: req.body.newPassword
                })
                res.status(200).send(returnVal)
            } else {
                res.status(403).send('Wrong Password')
            }
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}
userController.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            const deleteduser = await User.deleteOne({ _id : req.params.id});
            res.status(204).send('deleted')
        } else {
            res.status(404).send('User not found')
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = userController;