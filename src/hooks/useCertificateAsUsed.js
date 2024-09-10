import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

async function useCertificateAsUsed(promoCode) {
  try {
    const q = query(collection(db, "certificates"), where("promoCode", "==", promoCode));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return;
    }

    querySnapshot.forEach(async (docSnap) => {
      const docRef = doc(db, "certificates", docSnap.id);
      await updateDoc(docRef, { isUsed: true });
      console.log(`Документ ${docSnap.id} успешно обновлён`);
    });
  } catch (e) {
    console.error("Ошибка обновления документа: ", e);
  }
}

export default useCertificateAsUsed;
