import mongoose from "mongoose";

const informationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    company: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})

const Information = mongoose.model("Information", informationSchema);
export default Information;