import express from "express";
import {createServer} from "http";
import {config} from "dotenv";
import cors from "cors";
config({path: ".env"});
// import {route} from "./routes/index.js";

const app = express();
const server = createServer(app);

// perform routing
{
    try {
        route();
    } catch (error) {
        console.log("error ->", error)
    }
}

// middlewares
app.use(express.json());
app.use(cors())


// listening server
const port = process.env.PORT || 4000;
server.listen(port, ()=> {
    console.log(`listening on ${port}`);
})