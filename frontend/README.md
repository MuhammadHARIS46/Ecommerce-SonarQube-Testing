# MERN Ecommerce Project

This is a full-stack ecommerce project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a foundation for building an online store with features like product listing, user authentication, shopping cart functionality, and order processing.

## Features

- User authentication: Users can create accounts, log in, and log out. Authentication is handled using JSON Web Tokens (JWT) for secure and stateless communication.
- Product listing: Products are stored in a MongoDB database and can be viewed and searched on the frontend.
- Product details: Users can view detailed information about each product, including price, description, and images.
- Checkout process: Users can proceed to the checkout process, enter shipping and payment details, and place orders.
- User profiles: Users can view and edit their profile information, including shipping addresses and payment methods.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js: [https://nodejs.org](https://nodejs.org)
- MongoDB: [https://www.mongodb.com](https://www.mongodb.com)

## Getting Started

1. Clone the repository:
git clone <repository_url>


2. Navigate to the project directory:

cd mern-ecommerce-project

3. Install the dependencies:
npm install



4. Populate the database with sample data:

npm run data:import


5. Run the application:

- Start the backend server:

  ```
  cd .\backend\

  nodemon
  ```

- Start the frontend development server:

  ```
  npm run client
  ```

The server should start running on the specified port, and you can access the application in your browser at `http://localhost:<port_number>`.

**Note:** The backend server and frontend development server should be started concurrently using two separate terminal windows or with a tool like [concurrently](https://www.npmjs.com/package/concurrently).

## Project Structure

The project follows a modular architecture, with the frontend and backend code organized into separate directories.

- `backend`: Contains the server-side code, including the API routes, database models, controllers, and middleware.
- `frontend`: Contains the client-side code, including the React components, styles, and utility functions.
- `public`: Contains static assets, such as images and favicon.
- `scripts`: Contains scripts for database population and other utility tasks.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.

