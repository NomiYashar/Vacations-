import express from "express";

import authLogic from "../5-logic/auth-logic.js";
import Credentials from "../4-model/credentials.js";
import User from "../4-model/user.js";

const router = express.Router();

// Login: 

router.post("/login", async (request, response, next) => {

    try {
        // Get user credentials: 
        const credentials = new Credentials(request.body);

        // BL: 
        const token = await authLogic.loginAsync(credentials);
        if (!token) return response.status(401).send("Incorrect username or password.");

        // Success: 
        response.status(201).send(token);
    }
    catch (err) {
        next(err)
    }
});

//Register:
router.post("/register", async (request, response, next) => {
    try {
        // Get user: 
        const user = new User (request.body);

        // BL: 
        const token = await authLogic.registerAsync(user);

        // Success: 
        response.status(201).send(token);
    }
    catch (err) {
        next(err)
        
    }
});

export default router;