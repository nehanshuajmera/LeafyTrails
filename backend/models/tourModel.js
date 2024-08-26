import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const tourSchema = new Schema({
  cardHeading: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
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
  details: [
    {
      type: String,
      required: true,
    },
  ],
  popupTitle: {
    type: String,
    required: true,
  },
  popupHeading: {
    type: String,
    required: true,
  },
  popupContent: {
    type: String,
    required: true,
  },
  imageUrl: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Tour = mongoose.model('Tour', tourSchema);