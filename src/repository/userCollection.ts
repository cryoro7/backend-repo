import {db} from "../config/firebaseConfig";

export const updateUser = async (userId: string, userData: any) => {
  await db.collection("USERS").doc(userId).set(userData, {merge: true});
};

export const getUser = async (userId: string) => {
  const userDoc = await db.collection("USERS").doc(userId).get();
  return userDoc.exists ? userDoc.data() : null;
};
