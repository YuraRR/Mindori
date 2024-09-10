import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

let isCalled = false;
async function addBooking(userData) {
  if (isCalled) return;
  isCalled = true;
  setTimeout(() => (isCalled = false), 1000);

  try {
    const docRef = await addDoc(collection(db, "bookings"), userData);
    console.log("Document successfully written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error writing document: ", e);
  }
}

export default addBooking;
