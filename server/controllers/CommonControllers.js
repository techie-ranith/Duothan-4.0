const express = require('express');
const mongoose = require('mongoose');
const AdminModel = require("../models/AdminModel");
const AuthUserModel = require("../models/UserModel");
const AuthAdminModel = require("../models/AuthModels");
const UserModel = require("../models/UserModel");
const CommonModel = require("../models/CommonModel");


const getModel = (modelName) => {
    switch (modelName) {
        case 'AuthAdmin':
            return AuthAdminModel;
        case 'AuthUser':
            return AuthUserModel;
        case 'User':
            return UserModel;
        default:
            return CommonModel;
    }
};

// get all Items
const getItems = async (model, req, res) => {
    const dbmodel = getModel(model);
    try {
        const items = await dbmodel.find();
        res.status(200).json({ items });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get a single item 
const getItem = async (model, req, res) => {
    const dbmodel = getModel(model);
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid item id" });
    }
    try {
        const item = await dbmodel.findById(id); 
        if (!item) {
            return res.status(404).json({ msg: "Item not found" });
        }
        res.status(200).json({ item });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// create a new item
const createItem = async (req, res) => {
    const dbmodel = getModel(req.modelName);
    const data = req.body;
    try {
        const item = await dbmodel.create({ data });
        res.status(200).json({ item });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete an item
const deleteItem = async (req, res) => {
    const dbmodel = getModel(req.modelName);
    const { id } = req.params;
    try {
        const deletedItem = await dbmodel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ msg: "Item not found" });
        }
        res.status(200).json({ msg: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update an item
const updateItem = async (req, res) => {
    const dbmodel = getModel(req.modelName);
    const id = req.params.id;
    try {
        const updatedItem = await dbmodel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ msg: "Item not found" });
        }
        res.status(200).json({ item: updatedItem });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// delete all items
const deleteItems = async (req, res) => {
    const dbmodel = getModel(req.modelName);
    try {
        const result = await dbmodel.deleteMany({});
        res.status(200).json({ msg: "All items deleted successfully", deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem,
    deleteItems
}
