const { Jewellery } = require("../models");

const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
}

const getJewelleryList = async (req, res) => {
    return Jewellery.find({ $or: [{ is_active: false }] });
}

const deleteRecord = async (jewelleryId) => {
    return Jewellery.findByIdAndDelete(jewelleryId);
}

const jewelleryById = async (jewelleryId) => {
    return Jewellery.findById(jewelleryId);
}

module.exports = {
    createJewellery,
    getJewelleryList,
    deleteRecord,
    jewelleryById
}
