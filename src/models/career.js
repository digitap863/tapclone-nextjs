import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({

    position: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    location: { 
        type: String,
        required: true,
    },   
    description: {
        type: String,
        required: true,
    },

})

const Career = mongoose.models.Career || mongoose.model("Career", careerSchema);

export default Career;