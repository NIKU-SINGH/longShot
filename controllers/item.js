import Item from '../models/item.js'

// Function to create a new Item
export const createItem = async (req, res, next) => {
    const newItem = new Item(req.body);
    try {
        // Save the newly created Item in the database
        const savedItem = await newItem.save();
        res.status(200).json(savedItem); // Return the saved Item in the response
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to update an existing Item by its ID
export const updateItem = async (req, res, next) => {
    const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    try {
        // Return the updated Item in the response
        res.status(200).json(updatedItem);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to delete a Item by its ID
export const deleteItem = async (req, res, next) => {
    try {
        // Find and delete the Item by its ID
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json("Item Type has been deleted"); // Return success message in the response
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to get a Item by its ID
export const getItem = async (req, res, next) => {
    try {
        // Find a Item by its ID and return it in the response
        const Item = await Item.findById(req.params.id);
        res.status(200).json(Item);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to get all Items
export const getAllItem = async (req, res, next) => {
    try {
        // Retrieve all Items from the database and return them in the response
        const items = await Item.find().sort({ expiryDate: 1 }); // Sort in ascending order based on expiryDate
        res.status(200).json(Item);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}
