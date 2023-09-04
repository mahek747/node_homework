const mongoose =require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        destination:{
            type: String,
            trim: true,
        },
        departure_date:{
            type: Number,
            trim: true,
        },
        return_date:{
            type: Number,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Travel = mongoose.model("Travel",travelSchema);
module.exports = Travel;