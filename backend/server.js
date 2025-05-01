const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const membersRoutes = require('./routes/members');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/members', membersRoutes);

mongoose.connect('mongodb+srv://Trishank33:Trishank33@teamutr.houvk0s.mongodb.net/teamdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.listen(5000, () => console.log('Server running on port 5000'));
