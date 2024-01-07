import express from "express";
import authController from "./6-controllers/auth-controller.js";
import tripsController from "./6-controllers/trips-controller.js";
import cors from "cors";
import expressFileUpload from 'express-fileupload'
import catchAll from "./2-utils/catch-all.js";
import { RouteNotFoundErrorModel } from "./4-model/error-models.js";


const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/auth/", authController);

server.use(expressFileUpload());
server.use("/api/", tripsController);

server.use(express.static('./1-assets/'));

server.use('*', (req, res, next) => { next(new RouteNotFoundErrorModel(req.originalUrl))} );

server.use(catchAll);

server.listen(3001, () => {
    console.log("Listening on 3001");
}).on("error", (err) => {
    console.log(err);
    if (err.code === "EADDRINUSE")
        console.log("Error: Address in use");
    else
        console.log("Error: Unknown error");
});