const express = require('express');

const router = express.Router();

// Second Route - GET API
router.get('/', (req, res) => {
  res.send('GET API called from second route!');
});

// Second Route - POST API
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('POST API called from second route!');
});

module.exports = router;
