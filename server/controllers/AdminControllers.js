const {validateId,getItems, getItem,createItem, updateItem, deleteItem, deleteItems } = require('./CommonControllers')

const adminmodel = "Admin";


//get a single job
const getSingleJob = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const Job = await getItem(adminmodel, id,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


//get all jobs
const getAllJobs = async (req,res) => {
    try{
        const Job = await getItems(adminmodel, res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


// create a new job
const createNewJob = async (req,res) => {
    try{
        const data = req.body 
        const Job = await createItem(adminmodel, data, res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


//update an existing job
const updatedJob = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const data = req.body
        const Job = await updateItem(adminmodel,id,data,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

// delete a single job
const deleteSingleJob = async (req,res) => {
    try{
        const id = req.params.id
        if(!validateId(id,res)){
            return;
        }
        const Job = await deleteItem(adminmodel,id,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


// delete all jobs
const deleteAllJobs = async (req,res) => {
    try{
        const Job = await deleteItems(adminmodel,res);
        res.status(200).json({Job})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


module.exports = {
    getSingleJob,
    getAllJobs,
    createNewJob,
    updatedJob,
    deleteSingleJob,
    deleteAllJobs
}