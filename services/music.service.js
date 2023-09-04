const { Music } = require("../models");

const createMusic = async (reqBody) => {
    return Music.create(reqBody);
}

const getMusicList = async (req, res) => {
    return Music.find({ $or: [{ is_active: false }] });
}

const deleteRecord = async (musicId) => {
    return Music.findByIdAndDelete(musicId);
}

const musicById = async (musicId) => {
    return Music.findById(musicId);
}

module.exports = {
    createMusic,
    getMusicList,
    deleteRecord,
    musicById
}
