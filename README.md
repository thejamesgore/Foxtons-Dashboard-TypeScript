# Foxtons-Dashboard

<img width="1378" alt="Screenshot 2023-03-12 at 21 30 14" src="https://user-images.githubusercontent.com/83005220/224575048-cdb891df-fd72-470d-a28e-7e8bd2a6f188.png">

## Table of Contents

---

- Project Overview
- Code Installation
- Technologies Used
- Featured Code
- Bugs
- Wins and Challenges
- Key Learnings
- Future Content and Improvements

## Project Overview

---

The Foxtons Dashboard is a full MERN stack web application that serves as a tool for estate agents to manage their property portfolio. The dashboard provides agents with an overview of key metrics of their property portfolio, allows them to view all their properties in one place, and access detailed information about each one. The dashboard also features a chatbot helper powered by AI powered by OpenAI, which can assist agents in answering common questions and completing routine tasks.

The application is built using TypeScript, a popular programming language that adds optional static typing to JavaScript. This allows for increased code clarity and reduces the likelihood of errors, making the application more stable and reliable.

The dashboard uses React, a popular JavaScript library for building user interfaces, and ApexCharts, a lightweight charting library that allows for the easy creation of interactive, responsive charts and graphs. The combination of React and ApexCharts provides a visually appealing and intuitive user experience, making it easy for estate agents to view and analyze their property data.

The application also features CRUD functionality, allowing estate agents to easily add, edit, and delete properties from their portfolio. This functionality is made possible through the use of a backend API built using Node.js and Express, which provides a secure and reliable way to store and retrieve property data. The database is powered by MongoDB, a NoSQL database that is known for its scalability, flexibility, and ease of use.

Overall, the Foxtons Dashboard is a powerful and intuitive tool for estate agents, providing a comprehensive view of their property portfolio and making it easy to manage and analyze data. Its use of TypeScript, React, ApexCharts, Node.js, Express, and MongoDB makes it a showcase of modern web development techniques and a testament to my knowledge and skill.

## Code Installation

---

To install and run the Foxtons Landlord Dashboard on your local machine, follow these steps:

Clone the repository to your local machine using the command: `git clone https://github.com/thejamesgore/Foxtons-Dashboard`

### Obtaining Values for MONGODB_URL, CLOUDINARY, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET

To obtain the necessary values for these variables, follow these steps starting with the server folder:

1. Sign up for a MongoDB account on the MongoDB website.

2. Once you have signed up and logged in, create a new project and follow the steps to create a new MongoDB database.

3. Once your database has been created, click the "Connect" button and follow the steps to create a new database user and obtain your MongoDB connection string.

4. Copy your MongoDB connection string and paste it into the `.env` file in the server folder as the value for `MONGODB_URL` using the `.env.saple` as an exaple.

5. Sign up for a Cloudinary account on the Cloudinary website.

6. Once you have signed up and logged in, navigate to your dashboard and click the "API Credentials" button.

7. Under the "Account Details" section, you will find your Cloudinary URL. Copy this URL and paste it into the .env file in the server folder as the value for CLOUDINARY.

8. Under the "Security" section, you will find your Cloudinary API key and API secret. Copy these values and paste them into the `.env` file in the server folder as the values for `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET`, respectively.

9. Once you have obtained these values and updated your .env file, you should be able to run your server and access your MongoDB and Cloudinary resources.

### Setting up Google Authentication

1. To enable Google Authentication for your dashboard, you will need to set up a Google Cloud Console project and create a client ID. Follow these steps to get started:

2. Go to the Google Cloud Console and sign in with your Google account.

3. Click the project drop-down menu at the top of the screen and select "New Project". Give your project a name and click "Create".

4. Once your project has been created, click the "APIs & Services" tab on the left-hand side of the screen, then click "Credentials".

5. On the "Credentials" screen, click "Create credentials", then select "OAuth client ID".

6. Select "Web application" as the application type, then give your client ID a name.

7. In the "Authorized JavaScript origins" section, add http://localhost:3000 and http://localhost as an authorized origin.

8. In the "Authorized redirect URIs" section, add http://localhost:3000 and http://localhost as an authorized redirect URI.

9. Click "Create" to generate your client ID.

10. Once your client ID has been generated, copy the "Client ID" and "Client Secret" values and paste them into the appropriate fields in your .env file.

11. Save your changes to the .env file and restart the server by running the command npm run start in the server folder.

12. Navigate to the dashboard folder and create a new file called `.env` by copying the contents of `.env.sample` and updating the variables with the relevant values.

13. Install the required dependencies for both the dashboard and server folders by running the command: `npm install`

14. Start the server by navigating to the server folder and running the command: `npm run start`

15. Start the dashboard by navigating to the dashboard folder and running the command: `npm run start`

16. Open your browser and go to http://localhost:3000 to view the dashboard.

Congratulations, you have successfully installed and run the Foxtons Landlord Dashboard on your local machine! Please note that the above instructions assume that you have already installed Node.js on your local machine. If you have not, please refer to the documentation for those tools for installation instructions.

## Technologies Used

---

### Backend

- Node.js: A JavaScript runtime that allows developers to build scalable and performant server-side applications.
- Express.js: A lightweight and flexible web framework for Node.js that provides a powerful set of features for building web applications and APIs.
- MongoDB: A NoSQL database that provides high scalability and flexible data modeling capabilities.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB that provides a high-level API for interacting with MongoDB databases and collections.
- Cloudinary: A cloud-based image and video management service that provides powerful media manipulation capabilities.
- Cors: A middleware for Express.js that allows for Cross-Origin Resource Sharing (CORS) in web applications.
- Dotenv: A zero-dependency module that loads environment variables from a .env file.

### Frontend

- React: A popular JavaScript library for building user interfaces.
- TypeScript: A superset of JavaScript that adds optional static typing and other features to the language.
- Refine: A highly customizable React-based framework for building admin panels and dashboards.
- ApexCharts: A lightweight and versatile charting library that provides a wide range of charts and graphs for data visualization.
- Axios: A popular JavaScript library for making HTTP requests from the browser.
- React-ApexCharts: A React wrapper for ApexCharts that provides an easy way to use ApexCharts in React applications.

### Testing

- Jest: A JavaScript testing framework that provides a simple and powerful way to write and run unit tests for JavaScript code.
- React Testing Library: A testing utility for React that provides a simple and intuitive API for testing React components.
- TypeScript: A superset of JavaScript that adds optional static typing and other features to the language.

### Development Tools

- Visual Studio Code: A popular and powerful code editor that provides a wide range of features for developing and debugging code.
- ESLint: A popular linter for JavaScript and TypeScript that helps ensure code quality and consistency.
- Prettier: A code formatter that helps enforce consistent code formatting across the project.
- Git: A version control system that helps manage changes to the codebase and enables collaboration with other developers.
- GitHub: A popular online platform for hosting and sharing code repositories and collaborating with other developers.
