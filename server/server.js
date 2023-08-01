const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const koalaRouter = require('./routes/koala.router');

app.use(express.json());
app.use(express.static('server/public'));

// ROUTES
app.use('/koalas', koalaRouter);

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

app.get('/koalas', function(req, res){
  console.log('Request for /koalas was made');
  res.send(koalaList);
});

app.post('/koalas', (req, res) => {
  koalaList.push(req.body);
  res.sendStatus(200);
});
