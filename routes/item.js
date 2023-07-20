import express from "express";
import { createItem, updateItem, deleteItem, getItem } from '../controllers/item.js';

const router = express.Router();

// Swagger
/**
 * @swagger
 * tags:
 *   name: Item
 *   description: API endpoints for managing items
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the item
 *         title:
 *           type: string
 *           description: The title of the item
 *         author:
 *           type: string
 *           description: The item author
 *         finished:
 *           type: boolean
 *           description: Whether the item has been finished
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the item was added
 *       example:
 *         id: d5fE_asz
 *         title: Sample Item
 *         author: John Doe
 *         finished: false
 *         createdAt: 2022-07-20T12:34:56.789Z
 */

// CREATE ITEM
/**
 * @swagger
 * /item/create:
 *   post:
 *     summary: Create a new item.
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The newly created item.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.post("/create", createItem);

// UPDATE ITEM
/**
 * @swagger
 * /item/update/{id}:
 *   put:
 *     summary: Update an existing item by ID.
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the item to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The updated item.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.put("/update/:id", updateItem);

// DELETE ITEM
/**
 * @swagger
 * /item/delete/{id}:
 *   delete:
 *     summary: Delete an item by ID.
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the item to delete.
 *     responses:
 *       200:
 *         description: The item has been deleted.
 */
router.delete("/delete/:id", deleteItem);

// GET ITEM BY ID
/**
 * @swagger
 * /item/{id}:
 *   get:
 *     summary: Get an item by ID.
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the item to retrieve.
 *     responses:
 *       200:
 *         description: The item.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.get("/:id", getItem);

export default router;
