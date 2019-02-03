const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set('port', port);

app.use(express.static(__dirname));

app.set('views', __dirname);
app.set('view engine', 'pug');

app.get('*', (request, response) => {
  response.render('index');
});

app.listen(app.get('port'), () => {
  console.log(`Hasan\'s Node app is running on http://localhost:${port}`);
});