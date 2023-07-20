import express from "express";
// Imports
import connection from "./connector/db.js";
import dotenv from "dotenv";
import cors from "cors";
import storeRoute from "./routes/store.js";
import itemRoute from "./routes/item.js";
import itemTypeRoute from "./routes/itemType.js";

// swagger
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// PORT of the application will be changed when it is deployed
const PORT = process.env.PORT || 8000;

const app = express();
dotenv.config();

// Swagger
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Store App API Docs",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "https://store-app-g0cb.onrender.com/api" || "http://localhost:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/store", storeRoute);
app.use("/api/item", itemRoute);
app.use("/api/itemType", itemTypeRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something wen wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Connecting it to Mongo DB
connection();

app.listen(PORT, () => {
  console.log("server runniing on PORT", PORT);
});
