import express from "express";
import { createItemType, updateItemType, deleteItemType, getAllItemType} from '../controllers/itemType.js';

const router = express.Router();

// CREATE
router.post("/create",createItemType);

// UPDATE 
router.put("/update/:id", updateItemType)

// DELETE
router.delete("/delete/:id", deleteItemType)

// GET BY ID
// router.get("/:id", getItem)

// GET ALL ITEM TYPE
router.get("/getall", getAllItemType)



export default router;
