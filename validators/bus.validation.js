const Joi = require('joi');

/** create bus */
const createBus = {
    body : Joi.object().keys({
        busName : Joi.string().required().trim(),
        busNumber : Joi.number().required().trim(),
        seatingcapacity : Joi.number().required().trim(),
        departureTime : Joi.string().required().trim(),
        arrivalTime : Joi.string().required().trim()
    }),
};

/** get bus list */
const getBusList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createBus,
    getBusList
}
