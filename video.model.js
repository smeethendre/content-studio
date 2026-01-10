import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
  {
    videoTitle: {
      type: String,
      required: true,
    },

    channelOwner: {
      type: mongoose.Schema.Type.objectId,
      ref: "User",
      required: true,
    },

    views: {
      type: Number,
      required: true,
    },

    isPublished: {
      type: Boolean,
      required: true,
    },
    
    shares: {
      type: Number,
      required: true,
    }

  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
