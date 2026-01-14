import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

//generate access and refresh token

export const User = mongoose.model("User", userSchema);
