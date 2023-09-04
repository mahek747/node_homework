const mongoose =require("mongoose");

const musicSchema = new mongoose.Schema(
    {
        song_name:{
            type: String,
            trim: true,
        },
        artist:{
            type: String,
            trim: true,
        },
        release_date:{
            type: Number,
            trim: true,
        }
    },
    {
        timestamps:true,
        versionkey: false,
    }
);

const Music = mongoose.model("Music", musicSchema);
module.exports = Music;