// In EJS, a custom file loader is a function that is responsible for loading EJS templates from a non-default location, such as a database or a remote server.
// Advantages: Flexibility, Efficiency and Security

const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const app = express();

// Define the custom file loader function
async function loadTemplate(templateName) {
  const response = await axios.get(`https://example.com/templates/${templateName}.ejs`);
  return response.data;
}

// Set up the EJS view engine with the custom file loader
// We're setting the loader option to the loadTemplate function, which tells EJS to use this function to load templates instead of the default file system loader.
app.engine('ejs', ejs.__express({
    loader: loadTemplate
  }));


// Define a route that renders a page using the custom file loader
app.get('/', (req, res) => {
  const data = { name: 'John' };
  res.render('my-template', data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

