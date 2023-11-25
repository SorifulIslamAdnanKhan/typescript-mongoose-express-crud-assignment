Project Details

Name: Typescript-Mongoose-Express-CRUD

Github Repository: https://github.com/SorifulIslamAdnanKhan/typescript-mongoose-express-crud-assignment

Server Link:

Features

- Create a Node, Express server.
- Connect MongoDB in the application.
- Create interface for user and add their types.
- Insert user to the database using POST method.
- Get all users from database using GET method.
- Get single user from database using PUT method.
- Update single user to the database using POST method.
- Delete a user data from the database using DELETE method.
- Create custom instance to check isUserExists in the database or not.
- Use Postman to send request.
- Use pre and post middleware.
- Use Zod validation.
- Use bcrypt to hash password filed.

Language, Tools and Library Used

- TypeScript
- Node
- Express
- MongoDB
- Mongoose
- Zod
- bcrypt
- Postman
- cors
- dotenv
- ts-node-dev
- prettier
- eslint

How To Use Application Locally

Note: Make sure you have Node.js and npm installed on your system before starting the setup.

Step 1:

Go to my Github Repository and click the green '<code>' button. Copy this link: https://github.com/SorifulIslamAdnanKhan/typescript-mongoose-express-crud-assignment.git from the HTTPS tab to clone the project.

Step 2:

Select the file path where you want to clone the project. Now open your computer CMD or Command Prompt.

Step 3:

Paste the copied Github project clone linked into the CMD using the 'git clone' command. Now move to the right directory using CD command.

Step 4:

Now, run the command 'nmp i' to install all the packages used in this application.

Step 5:

Create .env file and include your own data given below.

NODE_ENV=development
PORT=5000
DATABASE_URL= Add your own MongoDB database URL
BCRYPT_SALT_ROUNDS=12

Step 6:

Finally use 'npm run start:dev' to open the server.
