import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

// Update
router.put("/:id", verifyToken, updateUser);

// Delete
router.delete("/:id", verifyToken, deleteUser);

// Get
router.get("/find/:id", getUser);

// Subscribe
router.put("/sub/:id", verifyToken, subscribe);

// Unsubscribe
router.put("/unsub/:id", verifyToken, unsubscribe);

// Like a video
router.put("/like/:videoId", verifyToken, like);

// Dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;