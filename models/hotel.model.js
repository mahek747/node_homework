const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        hotel_name :{
            type: String,
            trim: true,
        },
        address :{
            type: String,
            trim: true,
        },
        room_number:{
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;