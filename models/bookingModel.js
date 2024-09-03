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
    contactNumber: {
      type: String,
      required: true,
    },
    numberOfMembers: {
      type: Number,
      required: true,
    },
    participants: [
      {
        name: {
          type: String,
          required: true,
        },
        age: {
          type: Number,
          required: false,
        },
      },
    ],
    specialRequests: {
      type: String,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
    tourDate: {
      type: Date,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
      enum: [
        "The Sea Explorer",
        "The Forest Hiker",
        "The Snow Adventurer",
        "The Desert Nomad",
        "The Jungle Safari",
        "The Mountain Trekker",
        "The Island Hopper",
        "The Canyon Explorer",
        "The Urban Explorer",
        "The River Runner",
        "The Great Safari",
        "The Adventure Seeker",
        "Romantic Island Getaway",
        "Couple's Mountain Retreat",
        "The Family Explorer",
        "The Beach Family Vacation",
        "The Exotic Islands",
        "The City Explorer",
        "Wine & Dine Getaway",
        "Lovers' Escape to Paris",
        "Starlit Desert Romance",
        "Family Jungle Expedition",
        "The Family Adventure Park Tour",
        "Cultural Family Heritage Tour",
        "The Mountain Trail",
      ],
    },
    packageCategory: {
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
    packagePrice: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Credit Card", "Debit Card", "PayPal", "Bank Transfer"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
