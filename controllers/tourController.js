import mongoose from "mongoose";
import { Tour } from "../models/tourModel.js";

/* get all tours data */
export const getTours = async (req, res) => {
  try {
    const getTours = await Tour.find({});
    res.status(200).json(getTours);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* get a single tour data */
export const getTour = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });

      const getTour = await Tour.findById(id);

      if (!getTour) {
        res.status(404).json({
          error: "The resource you're trying to access is not available",
        });
      }
      res.status(200).json(getTour);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* create a tour */
export const postTour = async (req, res) => {
  const {
    cardHeading,
    backgroundColor,
    price,
    category,
    details,
    popupTitle,
    popupHeading,
    popupContent,
    imageUrl,
  } = req.body;
  try {
    const createTour = await Tour.create({
      cardHeading,
      backgroundColor,
      price,
      category,
      details,
      popupTitle,
      popupHeading,
      popupContent,
      imageUrl,
    });
    res.status(201).json(createTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* delete a tour */
export const deleteTour = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const deleteTour = await Tour.findByIdAndDelete({ _id: id });

    if (!deleteTour) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(deleteTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* update a tour */
export const updateTour = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const updateTour = await Tour.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    if (!updateTour) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(updateTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};