// Client-side support in EJS refers to the ability to render EJS templates on the client-side (in the browser) instead of on the server-side (on the server).
// This can help to improve the performance and better user experience of your application as the compiled templates can be cached on the client-side, 
// reducing the amount of data that needs to be transferred over the network.

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.render('client', { name: 'Muhammad Harris' });
});


app.listen(3000, function() {
  console.log('Server started on port 3000');
});
