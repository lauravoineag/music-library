const express = require('express');
const app = express();
app.use(express.json());

//Add a get route to / in your app.js.
//It should return a 200 status code and a Hello World string.
//Run your app and send a GET request to localhost:4000 in postman.
//If you get a Hello World then you know that your app is working.

app.get('/', (request, response) => {
  console.log('error');
  response.status(200).send('Hello World');
});

module.exports = app;
