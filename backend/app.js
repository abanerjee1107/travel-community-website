const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');

db.sequelize.sync();

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/trip.routes')(app);
require('./routes/blog.routes')(app);
require('./routes/notification.routes')(app);
require('./routes/event.routes')(app);
require('./routes/review.routes')(app);

module.exports = app;
