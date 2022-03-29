const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/auth/login', (req, res) => {
  const result = {
    responseData: {
      user: req.body,
      token: 'token',
      refetchToken: '',
    },
    success: true,
    message: 'test error',
  };
  res.json(result);
});

app.get('/api/auth/profile', (req, res) => {
  const result = {
    responseData: {
      user: {
        username: 'hello',
        password: '',
      },
      token: 'token',
      refetchToken: '',
    },
    success: true,
    message: 'test error',
  };
  res.json(result);
});

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
