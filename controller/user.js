const userModel = require('../models/user');
const bcrypt = require('bcrypt');

// POST: create new user.
exports.addUser = (req, res) => {
    // Body-parser needed
    let body = req.body;
    // Create a new user model
    let newUser = new userModel({
        name: body.name,
        email: body.email,
        password: body.password ? bcrypt.hashSync(body.password, 10) : body.password
    });

    // Store the new user in the database
    newUser.save((err, userDB) => {
        if(err)
            return res.status(400).json({
                ok: false,
                err: err,
            });
        res.json({
            ok: true,
            user: userDB,
            msg: 'User created successfully'
        });
    });
};

exports.listUser = (req, res) => {
    // Get 'start' and 'limit' params from url.
    let queryLimit = Number(req.query.limit || 5);

    // find users.
    userModel.find()
        .limit(queryLimit)
        .exec((err, userList) => {
            if(err)
                return res.status(400).json({
                    ok: false,
                    err: err,
                });
            userModel.estimatedDocumentCount((err, count) => {
                res.json({
                    ok: true,
                    userList,
                    msg: 'User list',
                    total_users: count

                });
            });
        });
};