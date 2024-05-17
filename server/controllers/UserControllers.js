const {validateId,getItems, getItem,createItem, updateItem, deleteItem, deleteItems } = require('./CommonControllers')

const usermodel = "Users";


//get a single job
const getUser = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const Job = await getItem(usermodel, id,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


//get all jobs
const getAllUsers = async (req,res) => {
    try{
        const Job = await getItems(usermodel, res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


// create a new job
const createUser = async (req,res) => {
    try{
        const data = req.body 
        const Job = await createItem(usermodel, data, res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


//update an existing job
const updatedUser = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const data = req.body
        const Job = await updateItem(usermodel,id,data,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

// delete a single job
const deleteUser = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const Job = await deleteItem(usermodel,id,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


// delete all users
const deleteUsers = async (req,res) => {
    try{
        const Job = await deleteItems(usermodel,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


module.exports = {
    getUser,
    getAllUsers,
    createUser,
    updatedUser,
    deleteUser,
    deleteUsers
}