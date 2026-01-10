import { Schema } from "mongoose";

const videoSchema = new Schema({
    videoTitle: {
        type: String,
        required: true
    },

    channelOwner: {
        type:mongoose.Schema.Type.objectId,
        ref: "User",
        required: true
    },


})