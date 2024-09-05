import express from "express";
import {
  deleteBooking,
  getAllBooking,
  getBooking,
  postBooking,
  updateBooking,
} from "../controllers/bookingController.js";
const router = express.Router();

router.get("/", getAllBooking);
router.get("/:id", getBooking);
router.post("/", postBooking);
router.delete("/:id", deleteBooking);
router.patch("/:id", updateBooking);

export const bookingRoutes = router;
