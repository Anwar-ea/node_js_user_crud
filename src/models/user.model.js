const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true, auto: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Schema.Types.Number, required: true},
})

const UserModel = model('User', userSchema, 'User');

module.exports = {userSchema, UserModel};