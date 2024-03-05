import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

// Create a new user end-point
router.post("/signup", signup)

// Sign in end-point
router.post("/signin", signin)

// Google end-point
 router.post('/google', )

export default router;