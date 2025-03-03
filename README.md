# Blog App Backend

## Overview

This is a lightweight **Express.js** and **Node.js** backend server for the Blog App. It provides a RESTful API for handling blog-related operations such as fetching, creating, updating, and deleting blog posts.

## Features

- **RESTful API Endpoints:**
  - `GET /blog` - Fetch all blogs.
  - `GET /blog/:id` - Fetch a single blog by ID.
  - `POST /blog` - Add a new blog.
  - `PUT /blog/:id` - Edit an existing blog.
  - `DELETE /blog/:id` - Delete a blog.
  - `GET /blog/search?tag=xyz` - Search blogs by title.
- **Lightweight & Fast:** Uses Express.js for efficient request handling.

## Tech Stack

- **Backend:** Node.js, Express.js

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/amruteshdevadas/blog-app-api
   cd blog-app-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Express server:
   ```sh
   npm start
   ```

## Usage

- Start the backend server.
- The frontend will communicate with this server to fetch and manage blogs.
- API calls can be tested using Postman or any API testing tool.
