# Grocery Store Stock Management API

This project is a back-end application built using Node.js that provides an API for managing and categorizing stock for a small-scale grocery store. The API allows you to create storage spaces, define item types, and manage items with specific properties and storage requirements. It also handles item expiration and disposal.

## Installation

To run the Grocery Store Stock Management API, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/NIKU-SINGH/longShot_task
   ```

2. Navigate to the project directory:

   ```bash
   cd LongshotAI
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file based on the provided `.env.example` file.
   - Configure the necessary environment variables, such as the database connection details.

5. Set up the database:

   - Ensure you have a MongoDB instance running or provide the connection details in the `.env` file.
   - The API will create the required collections and indexes automatically.

6. Start the API:

   ```bash
   npm start
   ```

7. The API will be accessible at `http://localhost:3000`.

## API Endpoints

The Grocery Store Stock Management API provides the following endpoints:

- **Storage Spaces**
  - `POST /storage-spaces`: Create a new storage space.
  - `PUT /storage-spaces/:id`: Rename an existing storage space.
  - `DELETE /storage-spaces/:id`: Delete an unoccupied storage space.
  - `GET /storage-spaces/:id/items`: Get a list of items allocated to a specific storage space.

- **Item Types**
  - `POST /item-types`: Create a new item type.
  - `PUT /item-types/:id`: Rename an existing item type.
  - `DELETE /item-types/:id`: Delete an item type if it has no associated items.

- **Items**
  - `POST /items`: Create a new item.
  - `PUT /items/:id/move`: Relocate an item to a different storage space.
  - `DELETE /items/:id`: Remove an existing item.
  - `GET /items`: Get a paginated list of all items, optionally sorted by expiration date.

Refer to the API documentation or explore the code for more details on request payloads and responses.

## Contributing

Contributions to the Grocery Store Stock Management API are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository. Pull requests with code improvements, bug fixes, or additional features are also appreciated.

Before submitting a pull request, please ensure that your changes follow the project's coding standards, and include appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute the code as needed.