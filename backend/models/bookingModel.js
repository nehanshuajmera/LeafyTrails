import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tourCategory: {
      type: String,
      required: true,
      enum: [
        "Popular Tours",
        "Couple Tours",
        "Family Tours",
        "Attractive Tours",
        "Adventure Tours",
        "Relaxation Tours",
      ],
    },
    numberOfMembers: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
