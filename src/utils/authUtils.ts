import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/firebaseConfig';

interface TokenPayload {
  userId: string;
}

export function generateJWT(userId: string): string {
  const payload: TokenPayload = {
    userId,
  };

  const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
  return token;
}