import express from "express";
import { response } from "../utils/response.mjs";
import {getEventsByUserId,createEvent} from '../models/eventModle.mjs';

const eventController = express.Router(); 

/**
 * this router is responsible for getting all events
 * this route is a GET request
 * @name get/events
 */

eventController.get("/:user_id", async (req, res) => {
    try {
        const userId = req.params.user_id;

        const events = await getEventsByUserId(userId);

        return response.success(res,events);
    } catch (error) {
        return response.error(res, error.message);
    }
});



/**
 * this router is responsible for creating a new event
 * this route is a POST request
 * @name post/create
 * 
 */

eventController.post("/create", async (req, res) => {
    try {
        console.log(req.body);
        const { eventName, eventType, eventDate, eventStartTime, eventEndTime, eventVenue, status, guests } = req.body;

        await createEvent(eventName, eventType, eventDate, eventStartTime, eventEndTime, eventVenue, status, guests);

        return response.success(res, "Event created successfully");
    } catch (error) {
        console.log(error);
        return response.error(res, error.message);
    }
});

eventController.post

export default eventController;