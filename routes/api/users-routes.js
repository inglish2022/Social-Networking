const router = require('express').Router();

const {
    getAllUsers,
    createUsers,
    getUserByID,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// set up GET all and POST /api/users
router.route('/')
.get(getAllUsers)
.post(createUsers);

// set up GET one, PUT and DELETE /api/users/:id
router.route('/:id')
.get(getUserByID)
.put(updateUsers)
.delete(deleteUsers);

// set up GET one, PUT and DELETE /api/users/:id/friends/:friendId

router.route('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)


module.exports = router;