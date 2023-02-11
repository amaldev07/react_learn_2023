const express = require('express');

const router = express.Router();

// First Route - GET API
router.get('/', (req, res) => {
  res.send('GET API called from first route!');
});

// First Route - POST API
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('POST API called from first route!');
});

module.exports = router;
