const express = require('express');
const app = express();
const port = 3020;



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
