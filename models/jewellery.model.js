const { string } = require("joi");
const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
    {
        item_name:{
            type: String,
            trim: true,
        },
        price:{
            type: Number,
            trim: true,
        },
        material:{
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Jewellery = mongoose.model("Jewellery", jewellerySchema);
module.exports = Jewellery;