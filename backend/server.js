const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');

const uploadRoutes = require('./routes/uploadRoutes');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/upload', uploadRoutes);

// const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.listen(port, () => console.log(`Server started on port ${port}`));
