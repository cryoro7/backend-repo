"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const firebaseConfig_1 = require("../config/firebaseConfig");
function generateJWT(userId) {
  const payload = {
    userId,
  };
  const token = jsonwebtoken_1.default.sign(
    payload,
    firebaseConfig_1.jwtSecret,
    { expiresIn: "1h" }
  );
  return token;
}
exports.generateJWT = generateJWT;
