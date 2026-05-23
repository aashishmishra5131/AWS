import { Router } from "express";
import { protect, AuthRequest } from "../middleware/auth.middleware";
import { Response } from "express";

const router = Router();

// @desc    Protected route example - Get user profile
// @route   GET /api/user/profile
router.get("/profile", protect, (req: AuthRequest, res: Response) => {
  res.json({
    success: true,
    message: "This is a protected route",
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      createdAt: req.user.createdAt,
    },
  });
});

export default router;
