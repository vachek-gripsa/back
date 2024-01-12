# Vachek-Gripsa Project

This documentation pertains to the server-side component of the project. Frontend repository link:

- [Frontend Repository](https://github.com/vachek-gripsa/front)
- [Deployed Project]()

**Responsible Developer:** [Konstantin Sukhykh](https://www.linkedin.com/in/kostiantyn-sukhykh/)  
**Document Status:** In Progress  
**Document Version:** 1.0.0  
**Last Update:** January 12, 2024

## Table of Contents

1. [Description](#description)
2. [Team](#team)
3. [Technology Stack](#technology-stack)
4. [Local Deployment](#local-deployment)
5. [Architecture Overview](#architecture-overview)

## Description

Vachek-Gripsa is implemented as a dynamic dashboard that provides visualization of diverse data. Its
modular structure allows for easy addition of new features and expansion of project capabilities.
Regardless of the application domain, Vachek-Gripsa is designed with flexibility and
user-friendliness in mind.

The project is open for collaboration and active community participation. Developed as a pet
project, it welcomes new ideas and contributions aimed at continuous improvement of functionality
and usability. Vachek-Gripsa is not just a tool but also a community that unites enthusiasts,
supporting each other in the development and enhancement of this exciting project.

## Team

[Konstantin Sukhykh](https://www.linkedin.com/in/kostiantyn-sukhykh/) and
[Vyacheslav Kopytov](https://www.linkedin.com/in/slava-kopytov-2453b3208/), junior developers and
the primary architects of Vachek-Gripsa, have pooled their knowledge and energy to conceive this
project, aiming to showcase their advanced skills in software development. More than just a pet
project, it functions as an evolving platform, inviting the community to participate collaboratively
in expanding and refining Vachek-Gripsa.

## Technology Stack

### Project Requirements

This server application is developed using the following technologies and libraries:

- **Node.js (v14.x or higher):** The server is built on Node.js, and it is recommended to use
  version 14.x or higher for optimal performance.
- **Express (v4.18.2):** A fast, unopinionated, minimalist web framework for Node.js, used for
  building the server.
- **MongoDB (v8.0.3):** A popular NoSQL database, utilized for data storage in the application.
- **Swagger (v6.2.8):** Used for API documentation, with swagger-jsdoc (v6.2.8) and
  swagger-ui-express (v5.0.0).
- **JWT (v9.0.2):** JSON Web Token for secure authentication.
- **Bcrypt (v5.1.1):** Library for hashing passwords.
- **Express Validator (v7.0.1):** Middleware for request validation in Express.
- **Multer (v1.4.5-lts.1):** Middleware for handling multipart/form-data, used for file uploads.
- **Helmet (v7.1.0):** Middleware to secure Express applications with various HTTP headers.
- **Body Parser (v1.20.2):** Middleware to parse incoming request bodies in a middleware before your
  handlers.
- **Cors (v2.8.5):** Middleware to enable cross-origin resource sharing.
- **Cookie (v0.6.0):** Library for handling browser cookies.
- **Dotenv (v16.3.1):** Zero-dependency module that loads environment variables from a .env file
  into process.env.
- **Winston (v3.11.0):** A versatile logging library.
- **dotenv (v16.3.1):** Zero-dependency module that loads environment variables from a .env file
  into process.env.

### Additional Requirements

#### Hardware Requirements

- A computer with sufficient performance for effective web development.
- Internet access for downloading necessary project dependencies and libraries.

#### Software Requirements

- Node.js (recommended version 14.x or higher)
- Node Package Manager or yarn for managing project dependencies.
- Code editor of your choice.

> **Note:** Before updating any library versions, review the official documentation of each library
> and perform the update according to their instructions. Make necessary changes in accordance with
> the requirements outlined in this documentation. The application's operation on library versions
> lower than the specified requirements has not been tested.

## Local Deployment

For local deployment, use develop branches. Follow these commands:

- Clone the Repository with `git clone https://github.com/vachek-gripsa/back.git`
- Switch to the pre_dev branch with `git checkout develop`
- Install Dependencies with `npm install`
- Run the Development Server `npm run dev`

### Development Scripts

- **npm start** Run the server.
- **npm run dev** Run the server in development mode using.
- **npm run lint** Lint the project using ESLint with the specified configuration.

## Architecture Overview

Our application is built on the basis of the MVC (Model-View-Controller) architectural template,
designed for efficient code organization, ease of maintenance and scalability.

### Folder Structure

**root folder**

**|--> /images** (Contains static files, such as images and other media resources)

**|--> /logs** (Stores log files that record events within the application)

**|--> /src**

**|--|--> /config** (Configuration files defining application settings)

**|--|--> /controllers** (Controllers handling incoming requests)

**|--|--> /middlewares** (Middleware handlers performing actions before or after request processing)

**|--|--> /models** ( Data models describing the structure and interaction with databases)

**|--|--> /routes** (Routes definitions establishing the link between URLs and request handlers)

**|--|--> /server** (Main application file, server configuration, and database connection setup)

**|--|--> /services** (Functions and services interacting with databases)

**|--|--> /swagger** (Files related to Swagger, used for API documentation)

**|--|--> /utils** (Utility functions shared across the application)

**|--|--> /validation** (Files responsible for data validation)
