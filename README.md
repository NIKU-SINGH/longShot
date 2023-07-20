# Grocery Store Stock Management API

The Grocery Store Stock Management API is a compact back-end application designed to serve an API for managing and categorizing stock for a small-scale grocery store. The API allows users to create, update, and delete storage spaces (stores), item types, and items stored in the spaces.

## Deployed Link

[Store App](https://store-app-g0cb.onrender.com/api-docs/)

## API Endpoints

### Storage Spaces (Stores)

- **Create Storage Space**: `POST /api/store/create`
  - Create a new storage space with a unique name, refrigeration indicator, and a maximum limit for items.

- **Update Storage Space**: `PUT /api/store/update/:id`
  - Update an existing storage space by ID.

- **Delete Storage Space**: `DELETE /api/store/delete/:id`
  - Delete a storage space by ID.

- **Get Storage Space by ID**: `GET /api/store/findStore/:id`
  - Get a storage space by its unique ID.

- **Get All Storage Spaces**: `GET /api/store`
  - Get a list of all storage spaces.

### Item Types

- **Create Item Type**: `POST /api/itemType/create`
  - Create a new item type with a unique name and indicator for refrigeration requirements.

- **Update Item Type**: `PUT /api/itemType/update/:id`
  - Update an existing item type by ID.

- **Delete Item Type**: `DELETE /api/itemType/delete/:id`
  - Delete an item type by ID.

- **Get All Item Types**: `GET /api/itemType/getall`
  - Get a list of all item types.

### Items

- **Create Item**: `POST /api/item/create`
  - Create a new item with a unique title, author, and finished status.

- **Update Item**: `PUT /api/item/update/:id`
  - Update an existing item by ID.

- **Delete Item**: `DELETE /api/item/delete/:id`
  - Delete an item by ID.

- **Get Item by ID**: `GET /api/item/:id`
  - Get an item by its unique ID.

## API Documentation (Swagger)

The API is documented using Swagger/OpenAPI specification. The documentation provides details about each endpoint, including the required request bodies, responses, and example data. You can access the Swagger documentation by starting the server and navigating to the `/api-docs` route.

## Getting Started

1. Install the required dependencies by running `npm install`.
2. Start the server by running `npm start`.
3. The server will start running on `http://localhost:3000`.

Please ensure you have MongoDB set up and running, as the application relies on a database to store the storage spaces, item types, and items' information.

Feel free to use this API as a backend solution for your grocery store stock management application. For any questions or issues, please refer to the API documentation or reach out to the development team for support.

Happy managing and categorizing your grocery store stock!