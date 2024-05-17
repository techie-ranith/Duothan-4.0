const express = require('express');
const router = express.Router();
const {getSingleuser, getAllusers, createNewuser, updateduser, deleteSingleuser, deleteAllusers} = require('../controllers/UserControllers');

//get a single user
router.get('/:id', getSingleuser);

// get all users
router.get('/', getAllusers);

//post a new user
router.post('/', createNewuser);

//update a user
router.patch('/:id', updateduser);

//delete a user
router.delete('/:id', deleteSingleuser);

// delete all users
router.delete('/',deleteAllusers);


module.exports = router;
