import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

export default function useCertificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      const querySnapshot = await getDocs(collection(db, "certificates"));
      const certificatesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCertificates(certificatesData);
    };

    fetchCertificates();
  }, []);

  return certificates;
}
