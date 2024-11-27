const express = require("express");
const { createServer } = require("http");
const { config } = require("dotenv");
const cors = require("cors");
config({ path: ".env" });
const routes = require("./Routes");
require("./Config/database.js");
const bodyParser = require("body-parser");

const app = express();
const server = createServer(app);
app.use("/RIDEBUDDY/images", express.static(__dirname + "/Assets"));

// middlewares
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.text({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

//response handler
app.use((req, res, next) => {
  const ResponseHandler = require("./Config/response_handler");
  res.handler = new ResponseHandler(req, res);
  next();
});

app.use(routes);

// listening server
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`listening on ${port}`);
});
