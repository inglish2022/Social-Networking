const { Users } = require('../models');

const userController = {
    //get all users
    getAllUsers(req, res) {
        Users.find({})
            .then(usersData => res.json(usersData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //create a new user
    createUsers({ body }, res) {
        Users.create(body)
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => res.status(400).json(err));
    },
    //get user by id
    getUserByID({ params }, res) {
        Users.findOne({ _id: params.id })
            .then(usersData => res.json(usersData))
            .catch(err => res.status(400).json(err));
    },
    //update user
    updateUsers({ params, body }, res) {
        Users.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User with this id!' });
                    return;
                }
                res.json(dbusersData);
            })
            .catch(err => res.json(err))
    },
    //delete user
    deleteUsers({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User with this id!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.status(400).json(err));
    },
    //add a friend
    addFriend({ params }, res) {
        Users.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { new: true })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No friend with this id!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.json(err));
    },

    // Delete a current Friend
    deleteFriend({ params }, res) {
        Users.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId } },
            { new: true })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No friend with this id!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = userController;