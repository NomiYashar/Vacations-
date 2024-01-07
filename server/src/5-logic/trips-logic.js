import fileHandler from "../2-utils/file-handler.js";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-model/error-models.js";
import dal from "./../2-utils/dal.js"

async function getAllTripsAsync(userId, offset) {
    return await dal.executeQueryAsync(`
        select *, 
            (SELECT COUNT(*) FROM followers WHERE followers.tripId = trips.tripId ) as tripLikes,
            EXISTS(SELECT * FROM followers WHERE followers.tripId = trips.tripId AND followers.userId = ${userId}) as isLiked
        FROM trips
        ORDER BY tripStartDate 
        LIMIT 10 OFFSET ${offset}
    `);
}

async function getOneTrips(id){
    const trip = await dal.executeQueryAsync(`
        select * from trips where id = ${id}
    `);

    if(trip.length < 1 || !trip) throw new ResourceNotFoundErrorModel(id);

    return trip[0];
}

async function addTrip(trip){
    const err = trip.validate();
    if(err) throw new ValidationErrorModel(err);
    
    trip.tripPic = await fileHandler.saveFile(trip.image); 
    delete trip.image; 

    const info = await dal.executeQueryAsync(`
        insert into trips values(default, "${trip.tripLocation}", "${trip.tripDesc}", "${trip.tripStartDate}", "${trip.tripEndDate}", ${trip.tripCost}, "${trip.tripPic}")
    `);

    trip.tripId = info.insertId;

    return trip;
}

async function updateTrip(trip){
    const err = trip.validate();
    if(err) throw new ValidationErrorModel(err);

    if(trip.image){
        fileHandler.deleteFile(trip.tripPic);
        trip.tripPic = await fileHandler.saveFile(trip.image); 
        delete trip.image; 
    }

    const info = await dal.executeQueryAsync(`
        update trips set tripLocation = "${trip.tripLocation}", tripDesc = "${trip.tripDesc}", tripStartDate = "${trip.tripStartDate}", tripEndDate = "${trip.tripEndDate}", tripCost = ${trip.tripCost}, tripPic = "${trip.tripPic}" where tripId = ${trip.tripId}
    `);

    if(info.affectedRows === 0) throw new ResourceNotFoundErrorModel(vacation.vacationId);

    return trip;
}

async function deleteTrip(id){
    await dal.executeQueryAsync(`
        delete from trips where tripId = ${id}
    `);
    await dal.executeQueryAsync(`
        delete from followers where tripId = ${id}
    `);
}

function addLike(userId, tripId){
    return dal.executeQueryAsync(`
        insert into followers values(${userId}, ${tripId})
    `);
}

function removeLike(userId, tripId){
    return dal.executeQueryAsync(`
        delete from followers where userId = ${userId} and tripId = ${tripId}
    `);
}

export default {
    getAllTripsAsync,
    getOneTrips,
    addTrip,
    updateTrip,
    deleteTrip,
    addLike,
    removeLike
};
 