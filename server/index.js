const express = require('express'); // brings in express so that we can use it
const app = express(); // gives us access to express' return object, which holds the methods we'll use (such as .get and .listen below)

const controller = require('./controller') // imports our file that holds the handler functions (functions that handle requests)

app.get('/api/users', controller.getAll); // endpoint
app.get('/api/user/:userId', controller.getOne); // endpoint


// app.listen() runs our server so that it's listening for any requests, and takes two arguments--port number and callback function that we use to visually show that the server is running with the console.log
app.listen(5050, () => console.log('Server listening on port 5050'));