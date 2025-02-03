const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(async () => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Hello from Node.js!');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});