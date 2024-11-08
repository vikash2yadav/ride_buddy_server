const express = require("express");
const { createServer } = require("http");
const { config } = require("dotenv");
const cors = require("cors");
config({ path: ".env" });
const routes = require("./routes");
require("./config/database.js");

const app = express();
const server = createServer(app);

app.use(routes);

// middlewares
app.use(express.json());
app.use(cors());

// listening server
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`listening on ${port}`);
});
