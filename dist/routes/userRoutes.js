"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const api_1 = require("../controller/api");
const authMiddleware_1 = require("../middleware/authMiddleware");
// eslint-disable-next-line new-cap
const router = (0, express_1.Router)();
exports.userRoutes = router;
router.post("/login", api_1.login);
router.get(
  "/get-user/:userId",
  authMiddleware_1.authMiddleware,
  api_1.fetchUserData
);
router.get("/", api_1.helloWorld);
router.put(
  "/update-user",
  authMiddleware_1.authMiddleware,
  api_1.updateUserData
);
