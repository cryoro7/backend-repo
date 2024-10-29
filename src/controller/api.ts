import {Request, Response, NextFunction} from "express";
import {db} from "../config/firebaseConfig";
import {ApiError} from "../entities/ApiError";
import { generateJWT } from '../utils/authUtils';


export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {userId, username} = req.body;

    await db.collection('USERS').doc(userId).set({ username }, { merge: true });
    res.status(200).send({message: "User data updated successfully"});
  } catch (error) {
    next(new ApiError("Failed to update user data", 500));
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {userId} = req.params;
    const userDoc = await db.collection("USERS").doc(userId).get();
    if (!userDoc.exists) {
      throw new ApiError("User not found", 404);
    }
    res.status(200).send(userDoc.data());
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const userSnapshot = await db.collection('USERS').where('email', '==', email).get();
    if (userSnapshot.empty) {
      throw new ApiError('User not found', 404);
    }

    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();
    
    if (!password === userData.password) {
      throw new ApiError("Invalid password", 401);
    }

    const jwtToken = generateJWT(userDoc.id);

    res.status(200).json({ token: jwtToken, data: userData });
  } catch (error) {
    console.error("Error logging in:", error);
    next(new ApiError("Invalid credentials", 401));
  }
};

export const helloWorld = (res: Response) => {
  res.status(200).send("hello world");
};
