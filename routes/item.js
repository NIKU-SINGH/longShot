import express from "express";
import { createItem, updateItem, deleteItem } from '../controllers/item.js';

const router = express.Router();

// CREATE
router.post("/create",createItem);

// UPDATE 
router.put("/update/:id", updateItem)

// DELETE
router.delete("/delete/:id", deleteItem)

// GET BY ID
// router.get("/:id", getItem)


export default router;
