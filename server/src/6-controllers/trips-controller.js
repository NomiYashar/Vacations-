import express from "express";
import tripsLogic from "../5-logic/trips-logic.js";
import Trip from "../4-model/trip.js";
import verifyLoggedIn from "../3-middleware/verify-logged-in.js";

const router = express.Router();

router.get("/trips/:userId/:offset", verifyLoggedIn, async (request, response, next) => {
    try {
        const userId = +request.params.userId;
        const offset = +request.params.offset;
        const result = await tripsLogic.getAllTripsAsync(userId, offset);
        response.send(result);
    }
    catch (error) {
        next(error)
    }
});

router.get("/trip/:id", verifyLoggedIn, async (request, response, next) => {
    try {
        const id = +request.params.id;
        const result = await tripsLogic.getOneTrips(id);
        response.send(result);
    }
    catch (error) {
        next(error)
    }
});

router.post("/trip", verifyLoggedIn, async (request, response, next) => {
    try {
        request.body.image = request.files?.image;
        const trip = new Trip(request.body);
        const result = await tripsLogic.addTrip(trip);
        response.send(result);
    }
    catch (error) {
        next(error)
    }
});

router.put("/trip", verifyLoggedIn, async (request, response, next) => {
    try {
        request.body.image = request.files?.image;
        const trip = new Trip(request.body);
        const result = await tripsLogic.updateTrip(trip);
        response.send(result);
    }
    catch (error) {
        next(error)
    }
});

router.delete("/trip/:id", async (request, response, next) => {
    try {
        const id = +request.params.id;
        const result = await tripsLogic.deleteTrip(id);
        response.send(result);
    }
    catch (error) {
        next(error)
    }
});

router.post("/like", verifyLoggedIn, async (request, response, next) => {
    try {
        const userId = +request.body.userId;
        const tripId = +request.body.tripId;
        const result = await tripsLogic.addLike(userId, tripId);
        response.send(result);
    }
    catch (error) {
        next(error)
    }
});

router.delete("/like/:userId/:tripId", verifyLoggedIn, async (request, response, next) => {
    try {
        const userId = +request.params.userId;
        const tripId = +request.params.tripId;
        const result = await tripsLogic.removeLike(userId, tripId);
        response.send(result);
    }
    catch (error) {
        next(error)
    }
});

export default router;