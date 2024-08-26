import mongoose from "mongoose";
import { Story } from "../models/storyModel.js";

export const getStories = async (req, res) => {
  try {
    const getStories = await Story.find({});
    res.status(200).json(getStories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getStory = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const getStory = await Story.findById(id);

    if (!getStory) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }

    res.status(200).json(getStory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const postStory = async (req, res) => {
  const { title, content, figCaption, backImage } = req.body;
  try {
    const addStory = await Story.create({
      title,
      content,
      figCaption,
      backImage,
    });
    res.status(201).json(addStory);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteStory = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const deleteStory = await Story.findByIdAndDelete({ _id: id });

    if (!deleteStory) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(deleteStory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateStory = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const updateStory = await Story.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    if (!updateStory) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(updateStory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
