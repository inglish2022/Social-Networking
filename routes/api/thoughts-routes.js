// Require express router
const router = require('express').Router();

// Set requirements (from thoughts-controller)
const { 
    getAllThoughts, 
    createThoughts,
    getThoughtById,         
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thought-controller');

// -- Directs to: /api/thoughts GET
router.route('/')
.get(getAllThoughts);

// -- Directs to: /api/thoughts/:id GET, PUT, DELETE
router.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought); 

// -- Directs to: /api/thoughts/:userId POST
router.route('/:userId')
.post(createThoughts);

// -- Directs to: /api/thoughts/:thoughtId/reactions POST
router.route('/:thoughtId/reactions')
.post(addReaction);


router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

// Export module router
module.exports = router;