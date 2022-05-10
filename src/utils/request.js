import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Add a new document in collection "cities"
export const insertDocument = async (colName, data) => {
  try {
    const res = await addDoc(collection(db, colName), data);

    if (!res) return;

    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteDocument = async (colName, id) => {
  try {
    const res = await deleteDoc(doc(db, colName, id));
    if (!res) return;

    return res;
  } catch (error) {
    console.error(error.message);
  }
};

export const getDocuments = async (colName) => {
  await getDocs(collection(db, colName));
};
