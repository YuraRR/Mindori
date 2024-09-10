import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import generatePromoCode from "../utils/generatePromoCode";
import { setCertificatePromoCode } from "../redux/features/certificateSlice";
import { useDispatch } from "react-redux";

let isCalled = false;

async function useCreateCertificate(certificateAmount) {
  if (isCalled) return;
  const dispatch = useDispatch();

  const data = {
    promoCode: generatePromoCode(),
    amount: certificateAmount,
    isUsed: false,
  };
  isCalled = true;
  setTimeout(() => (isCalled = false), 1000);

  try {
    dispatch(setCertificatePromoCode(data.promoCode));
    const docRef = await addDoc(collection(db, "certificates"), data);
    console.log("Document successfully written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error writing document: ", e);
  }
}

export default useCreateCertificate;
