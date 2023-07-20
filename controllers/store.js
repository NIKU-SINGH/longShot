import Store from '../models/storage.js'

// Function to create a new store
export const createStore = async (req, res, next) => {
    const newStore = new Store(req.body);
    try {
        // Save the newly created store in the database
        const savedStore = await newStore.save();
        res.status(201).json(savedStore); // Return the saved store in the response
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to update an existing store by its ID
export const updateStore = async (req, res, next) => {
    const updatedStore = await Store.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    try {
        // Return the updated store in the response
        res.status(200).json(updatedStore);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to delete a store by its ID
export const deleteStore = async (req, res, next) => {
    try {
        // Find and delete the store by its ID
        await Store.findByIdAndDelete(req.params.id);
        res.status(200).json("Store has been deleted"); // Return success message in the response
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to get a store by its ID
export const getStore = async (req, res, next) => {
    try {
        // Find a store by its ID and return it in the response
        const store = await Store.findById(req.params.id);
        res.status(200).json(store);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}

// Function to get all stores
export const getAllStore = async (req, res, next) => {
    try {
        // Retrieve all stores from the database and return them in the response
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (err) {
        next(err); // Pass any error to the error handling middleware
    }
}
