const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const distDir = path.resolve(__dirname, './dist');
app.use(express.static(distDir));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
