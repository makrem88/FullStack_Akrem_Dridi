# FullStack_Arem_Dridi
# Product Catalog

This repository contains both the backend and frontend projects for the Product Catalog application.

## Table of Contents

- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Application](#running-the-application)
  - [Backend](#running-the-backend)
  - [Frontend](#running-the-frontend)
- [Screenshots](#screenshots)

## Setup

### Backend

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/product-catalog.git
   cd product-catalog/backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the necessary environment variables. Example:
   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/product-catalog
   ```

4. **Run database migrations (if any):**
   ```sh
   npm run migrate
   ```

### Frontend

1. **Navigate to the frontend directory:**
   ```sh
   cd ../frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `frontend` directory and add the necessary environment variables. Example:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Running the Application

### Running the Backend

1. **Start the backend server:**
   ```sh
   npm start
   ```

   The backend server should now be running on the port specified in the `.env` file (default is `5000`).

### Running the Frontend

1. **Start the frontend development server:**
   ```sh
   npm start
   ```

   The frontend development server should now be running on `http://localhost:3000`.

## Screenshots (NO ScreenShots for now)

![Home Page](screenshots/home.png)
![Product Page](screenshots/product.png)

## Notes <br/>
- The backend has been tested and all tests pass. <br/>
- The frontend was developed within a 3-hour timeframe and has not been fully tested. It includes many features, but more testing is needed. Test scripts for some features have been added.


