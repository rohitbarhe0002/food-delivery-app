const path = require('path');
const express = require('express');
// const cors = require('cors');
const checkoutRoutes = require('./routes/checkoutRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
require('./db');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

// app.use(cors());
app.use(checkoutRoutes);
app.use(express.json());
app.use(paymentRoutes);

app.get('/', (req, res) => {
  res.send('Working!');
});

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
