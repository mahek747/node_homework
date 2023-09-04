const mongoose =require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movie_name:{
            type: String,
            trim: true,
        },
        geners:{
            type: String,
            trim: true,
        },
        actors_name:{
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;