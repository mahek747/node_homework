const mongoose =require("mongoose");

const stationarySchema = new mongoose.Schema(
    {
        product_name:{
            type: String,
            trim: true,
        },
        price:{
            type: Number,
            trim: true,
        },
        stock_quantity:{
            type: Number,
            trim: true,
        }
},
{
    timestamps: true,
    versionkey: false,
}
);
const Stationary = mongoose.model("Stationary", stationarySchema);
module.exports = Stationary;