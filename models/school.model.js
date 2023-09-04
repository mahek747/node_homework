const  mongoose =require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        establish_year:{
            type: Number,
            trim: true,
        },
        students:{
            type: Number,
            trim: true,
        },
        teachers:{
            type: Number,
            trim: true,
        }
},
{
    timestamps: true,
    versionkey: false,
}
);

const School = mongoose.model("School",schoolSchema);
module.exports = School;