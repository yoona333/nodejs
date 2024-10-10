const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

app.use(bodyParser.json());

const port = 3001;

// 导入路由
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
