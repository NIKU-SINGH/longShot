import ItemType from '../models/itemType.js'

// Function to create a new ItemType
export const createItemType = async (req, res, next) => {
    const newItemType = new ItemType(req.body);
    try {
        // Save the newly created ItemType in the database
        const savedItemType = await newItemType.save();
        res.status(200).json(savedItemType); // Return the saved ItemType in the response
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to update an existing ItemType by its ID
export const updateItemType = async (req, res, next) => {
    const updatedItemType = await ItemType.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    try {
        // Return the updated ItemType in the response
        res.status(200).json(updatedItemType);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to delete a ItemType by its ID
export const deleteItemType = async (req, res, next) => {
    try {
        // Find and delete the ItemType by its ID
        await ItemType.findByIdAndDelete(req.params.id);
        res.status(200).json("Item Type has been deleted"); // Return success message in the response
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to get a ItemType by its ID
export const getItemType = async (req, res, next) => {
    try {
        // Find a ItemType by its ID and return it in the response
        const itemType = await ItemType.findById(req.params.id);
        res.status(200).json(itemType);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to get all ItemTypes
export const getAllItemType = async (req, res, next) => {
    try {
        // Retrieve all ItemTypes from the database and return them in the response
        const itemType = await ItemType.find();
        res.status(200).json(itemType);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}
