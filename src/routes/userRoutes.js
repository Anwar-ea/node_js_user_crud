const {Router} = require('express');
const {createUser, getUsers, getUserById, updateUser, deleteUser, login} = require('../utility/user.util');

const router = Router();

router.post('/create', async (req, res) => {
    let user = await createUser(req.body);
    res.send(user);
})
router.get('/get_all', async (req, res) => {
    let users = await getUsers();
    res.send(users);
})
router.get('/get_by_id/:id', async (req, res) => {
    let user = await getUserById(req.params.id);
    res.send(user);
})
router.put('/update/:id', async (req, res) => {
    let user = await updateUser(req.body,req.params.id);
    res.send(user);
})
router.delete('/delete/:id', async (req, res) => {
    let user = await deleteUser(req.params.id);
    res.send(user);
})

router.post('/login', async (req, res) => {
    let user = await login(req.body);
    res.send(user);
})

module.exports = {userRouter: router}
