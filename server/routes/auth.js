import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

// Create a new user
router.post("/signup", signup)

// Sign in
router.post("/signin", signin)

export default router;