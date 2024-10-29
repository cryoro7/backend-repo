import {Router} from "express";
import {updateUserData, fetchUserData, helloWorld, login} from "../controller/api";
import {authMiddleware} from "../middleware/authMiddleware";

// eslint-disable-next-line new-cap
const router = Router();

router.post("/login", login);
router.get("/get-user/:userId", authMiddleware, fetchUserData);
router.get("/", helloWorld);

router.put("/update-user", authMiddleware, updateUserData);

export {router as userRoutes};
