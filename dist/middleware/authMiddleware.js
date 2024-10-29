"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const firebaseConfig_1 = require("../config/firebaseConfig");
const authMiddleware = (req, res, next) => {
  var _a;
  const token =
    (_a = req.headers.authorization) === null || _a === void 0
      ? void 0
      : _a.split(" ")[1];
  if (!token) {
    return res.status(401).send({ error: "Unauthorized" });
  }
  try {
    const decodedToken = jsonwebtoken_1.default.verify(
      token,
      firebaseConfig_1.jwtSecret
    );
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).send({ error: "Unauthorized" });
  }
};
exports.authMiddleware = authMiddleware;
