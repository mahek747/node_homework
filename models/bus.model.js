const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
    reg_number:{
        type: Number,
        trim: true,
    },
    model:{
        type: String,
        trim: true,
    },
    seatingcapacity:{
        type: Number,
        trim: true,
    },
},
{
    timestamps: true,
    versionkey:false,
}
);
const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;