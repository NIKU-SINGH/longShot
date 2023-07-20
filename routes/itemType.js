import express from "express";
import { createItemType, updateItemType, deleteItemType, getAllItemType } from '../controllers/itemType.js';

// Swagger

/**
 * @swagger
 * tags:
 *   name: Item Type
 *   description: API endpoints for managing item types
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ItemType:
 *       type: object
 *       required:
 *         - name
 *         - requiresRefrigeration
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the item type
 *         name:
 *           type: string
 *           description: The name of the item type
 *         requiresRefrigeration:
 *           type: boolean
 *           description: Whether the item type requires refrigeration
 *       example:
 *         id: d5fE_asz
 *         name: Ice Cream Sandwich
 *         requiresRefrigeration: true
 */

const router = express.Router();

// CREATE
/**
 * @swagger
 * /itemType/create:
 *   post:
 *     summary: Create a new item type.
 *     tags: [Item Type]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemType'
 *     responses:
 *       200:
 *         description: The newly created item type.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ItemType'
 */
router.post("/create", createItemType);

// UPDATE 
/**
 * @swagger
 * /itemType/update/{id}:
 *   put:
 *     summary: Update an existing item type by ID.
 *     tags: [Item Type]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the item type to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemType'
 *     responses:
 *       200:
 *         description: The updated item type.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ItemType'
 */
router.put("/update/:id", updateItemType);

// DELETE
/**
 * @swagger
 * /itemType/delete/{id}:
 *   delete:
 *     summary: Delete an item type by ID.
 *     tags: [Item Type]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the item type to delete.
 *     responses:
 *       200:
 *         description: The item type has been deleted.
 */
router.delete("/delete/:id", deleteItemType);

// GET ALL ITEM TYPE
/**
 * @swagger
 * /itemType/getall:
 *   get:
 *     summary: Get all item types.
 *     tags: [Item Type]
 *     responses:
 *       200:
 *         description: List of all item types.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ItemType'
 */
router.get("/getall", getAllItemType);

export default router;
