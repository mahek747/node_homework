const mongoose =require("mongoose");

const grocerySchema = new mongoose.Schema(
    {
        item_name:{
            type: String,
            trim: true,
        },
        price:{
            type: Number,
            trim: true,
        },
        stock:{
            type: Number,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Grocery = mongoose.model("Grocery",grocerySchema);
module.exports = Grocery;