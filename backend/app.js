const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const memberRoutes = require('./routes/memberRoutes');
const messageRoutes = require('./routes/messageRoutes');
const tripRoutes = require('./routes/tripRoutes');
const { sequelize } = require('./models');

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);
app.use('/members', memberRoutes);
app.use('/messages', messageRoutes);
app.use('/trips', tripRoutes);

sequelize.sync().then(() => {
    console.log('Database connected');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
