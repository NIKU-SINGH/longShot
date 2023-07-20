import express from "express";
const router = express.Router();
import { createStore, updateStore, deleteStore, getStore, getAllStore } from '../controllers/store.js';

// Swagger

/**
 * @swagger
 * tags:
 *   name: Store
 *   description: API endpoints for managing stores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Store:
 *       type: object
 *       required:
 *         - name
 *         - refrigeration
 *         - maxLimit
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the store
 *         name:
 *           type: string
 *           description: The name of the storage space
 *         refrigeration:
 *           type: boolean
 *           description: Whether the storage space has refrigeration capabilities
 *         maxLimit:
 *           type: number
 *           description: The maximum limit of items that can be stored in the space
 *       example:
 *         id: d5fE_asz
 *         name: Freezer
 *         refrigeration: true
 *         maxLimit: 100
 */

// CREATE
/**
 * @swagger
 * /store/create:
 *   post:
 *     summary: Create a new storage space.
 *     tags: [Store]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Store'
 *     responses:
 *       200:
 *         description: The newly created store.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.post("/create", createStore);

// UPDATE 
/**
 * @swagger
 * /store/update/{id}:
 *   put:
 *     summary: Update an existing storage space by ID.
 *     tags: [Store]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the storage space to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Store'
 *     responses:
 *       200:
 *         description: The updated store.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.put("/update/:id", updateStore);

// DELETE
/**
 * @swagger
 * /store/delete/{id}:
 *   delete:
 *     summary: Delete a storage space by ID.
 *     tags: [Store]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the storage space to delete.
 *     responses:
 *       200:
 *         description: The store has been deleted.
 */
router.delete("/delete/:id", deleteStore);

// GET BY ID
/**
 * @swagger
 * /store/{id}:
 *   get:
 *     summary: Get a storage space by ID.
 *     tags: [Store]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the storage space to retrieve.
 *     responses:
 *       200:
 *         description: The requested storage space.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.get("/findStore/:id", getStore);

// GET ALL
/**
 * @swagger
 * /store:
 *   get:
 *     summary: Get all storage spaces.
 *     tags: [Store]
 *     responses:
 *       200:
 *         description: List of all storage spaces.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Store'
 */
router.get("/", getAllStore);

export default router;
