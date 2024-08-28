import express from "express";
import {
  deleteTour,
  getTour,
  getTours,
  postTour,
  updateTour,
} from "../controllers/tourController.js";
const router = express.Router();

router.get("/", getTours);

router.get("/:id", getTour);

router.post("/", postTour);

router.delete("/:id", deleteTour);

router.patch("/:id", updateTour);

export const tourRoutes = router;