const express = require('express');
const router = express.Router();
const {getSingleadmin, getAlladmins, createNewadmin, updatedadmin, deleteSingleadmin, deleteAlladmins} = require('../controllers/adminControllers');

//get a single admin
router.get('/:id', getSingleadmin);

// get all admins
router.get('/', getAlladmins);

//post a new admin
router.post('/', createNewadmin);

//update a admin
router.patch('/:id', updatedadmin);

//delete a admin
router.delete('/:id', deleteSingleadmin);

// delete all admins
router.delete('/',deleteAlladmins);


module.exports = router;
