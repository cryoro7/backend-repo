// backend-repo/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/firebaseConfig';

interface DecodedToken {
  userId: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, jwtSecret) as DecodedToken;
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).send({ error: 'Unauthorized' });
  }
};
