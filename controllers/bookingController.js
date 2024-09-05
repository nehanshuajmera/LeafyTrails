import mongoose from "mongoose";
import { Booking } from "../models/bookingModel.js";

export const getAllBooking = async (req, res) => {
  try {
    const allBooking = await Booking.find({});
    res.status(200).json(allBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBooking = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const getBooking = await Booking.findById(id);

    if (!getBooking) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }

    res.status(200).json(getBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const postBooking = async (req, res) => {
  const {
    name,
    email,
    contactNumber,
    numOfMembers,
    participants,
    specialRequests,
    nationality,
    tourDate,
    packageName,
    packageCategory,
    packagePrice,
  } = req.body;
  try {
    const addBooking = await Booking.create({
      name,
      email,
      contactNumber,
      numOfMembers,
      participants,
      specialRequests,
      nationality,
      tourDate,
      packageName,
      packageCategory,
      packagePrice,
    });
    res.status(201).json(addBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const deleteBooking = await Booking.findByIdAndDelete({ _id: id });

    if (!deleteBooking) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(deleteBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const updateBooking = await Booking.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    if (!updateBooking) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(updateBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
