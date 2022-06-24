const router = require('express').Router();
// const thoughtsRoutes = require('./thoughts-routes');
const usersRoutes = require('./users-routes');

// router.use('/thoughts', thoughtRoutes);
router.use('/users', usersRoutes);

module.exports = router;