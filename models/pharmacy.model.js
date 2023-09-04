const mongoose =require("mongoose");

const pharmacySchema = new mongoose.Schema(
    {
        medicine_name:{
            type: String,
            trim: true,
        },
        phone_number:{
            type: Number,
            trim: true,
        },
        open_hours:{
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Pharmacy = mongoose.model("Pharmacy",pharmacySchema);
module.exports = Pharmacy;