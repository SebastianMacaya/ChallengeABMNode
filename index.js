import express from "express";
import cors from "cors"
import morgan from "morgan";
import { router } from "./src/routes/router.js";
const PORT = 8080;
import "./src/db.js";
import dotenv from "dotenv";
import http from "http"


dotenv.config();
const app = express();
app.use(morgan("dev"));
const server = http.createServer(app);
app.use(cors({
    origin: "http://localhost:4000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);



server.listen(process.env.PORT || PORT, () => {
    console.log("Server on localhost:" + PORT);
});