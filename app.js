const express = require('express');

const app = express();
const port = 5000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const indexRouter = require('./routes/indexRouter');
const newMessageRoute = require('./routes/newMessageRoute');

app.use('/', indexRouter);
app.use('/', newMessageRoute);

app.listen(port, () => {
  console.log(`App running on port ${port} `);
});
