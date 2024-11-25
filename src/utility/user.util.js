const {UserModel} = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (userRequest) => {
    let hash = await bcrypt.hash(userRequest.password, 8);
let user =  await (new UserModel({
    email: userRequest.email,
    name: userRequest.name,
    password: hash,
    age: userRequest.age
})).save();

return userDocumentToResponse(user);

}

const getUsers = async () => {
    return (await UserModel.find({})).map(x => userDocumentToResponse(x));
}

const getUserById = async (id) => {
    return userDocumentToResponse((await UserModel.findById(id)));
}

const updateUser = async (userRequest, id) => {
let updatedUser = await UserModel.findByIdAndUpdate(id, userRequest,{new: true});
return userDocumentToResponse(updatedUser);
}

const deleteUser = async () => {
    return userDocumentToResponse((await UserModel.findByIdAndDelete(id)));

}

const login = async (loginPayload) => {
    let user = await UserModel.findOne({email: loginPayload.email});
    if(user){
        try{
            let passwordMatch = await bcrypt.compare(loginPayload.password, user.password);
            let userResponse = userDocumentToResponse(user);
            if(passwordMatch) return {...userResponse, token: jwt.sign({id: userResponse._id, email: userResponse.email},process.env.JWT_Secret)}
        }catch(e){

        }
        return 
    }
}


const userDocumentToResponse = (document) => {
return {
    _id: document._id.toString(),
    email: document.email,
    name: document.name,
    age: document.age
}
}

module.exports = {createUser, getUsers, getUserById, updateUser, deleteUser, login}