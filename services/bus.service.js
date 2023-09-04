const { Bus } = require("../models");

const createBus = async (reqBody) => {
    return Bus.create(reqBody);
}

const getBusList = async (req, res) => {
    return Bus.find({ $or: [{ is_active: false }] });
}

const deleteRecord = async (busId) => {
    return Bus.findByIdAndDelete(busId);
}

const busById = async (busId) => {
    return Bus.findById(busId);
}

module.exports = {
    createBus,
    getBusList,
    deleteRecord,
    busById
}
