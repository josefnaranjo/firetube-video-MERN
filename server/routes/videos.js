import express from "express";
import { addVideo, 
        addView, 
        getByTag, 
        getVideo, 
        random, 
        search, 
        subscribed, 
        trend } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router  = express.Router()

// Create video
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifyToken, subscribed)
router.get("/tags", getByTag)
router.get("/search", search)

export default router;