import mongoose from "mongoose";
const Schema = mongoose.Schema;

const storySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    figCaption: {
      type: String,
      required: true,
    },
    backImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Story = mongoose.model("Story", storySchema);
