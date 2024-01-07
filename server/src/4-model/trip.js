import Joi from 'joi';

export default class Trip {
    constructor({tripId, tripLocation, tripDesc, tripStartDate, tripEndDate, tripCost, tripPic, image}) {
        this.tripId = +tripId || 1;
        this.tripLocation = tripLocation;
        this.tripDesc = tripDesc;
        this.tripStartDate = tripStartDate;
        this.tripEndDate = tripEndDate;
        this.tripCost = tripCost;
        this.tripPic = tripPic;
        this.image = image;
    }

    static TripSchema = Joi.object({
        tripId: Joi.number().optional().integer().positive(),
        tripLocation: Joi.string().min(4).max(50),
        tripDesc: Joi.string().min(4).max(201),
        tripStartDate: Joi.date().min(0),
        tripEndDate: Joi.date().min(0),
        tripCost: Joi.number().min(0).max(10000),
        tripPic: Joi.string().min(4).max(50),
        image: Joi.optional()
    });

    validate() {
        const result = Trip.TripSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.details.map(err => err.message) : null;
    }
}