import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },

  numberOfVideos: {
    type: mongoose.Schema.Type.objectId,
    ref: "video.model.js",
  },

  totalNumberOfViews: {
    type: mongoose.Schema.Type.objectId,
    ref: "video.model.js",
  },

  totalSubscribers: {
    type: Number,
    required: true,
  },
});

//generate access and refresh token

export const User = mongoose.model("User", userSchema);
