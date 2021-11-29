const express = require("express");
require("dotenv").config();

const app = express();


/// app Level Middleware
app.use(express.json());

PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});