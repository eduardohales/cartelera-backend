const mongoose = require('mongoose');
const _ = require('underscore');

const userModel = new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
       type: String,
        required: true
    }
});

// Modifies returned object when server does a query.
userModel.methods.toJSON = function () {
    let obj = this.toObject();
    obj = _.pick(obj, ['_id', 'name', 'email']);
    return obj;
};

module.exports = mongoose.model('userModel', userModel);