import Modal from "./Modal/Modal";
import RequestBookingForm from "./RequestBookingForm";
import PromoCodeModal from "./PromoCodeModal";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

export default function CertificateModals({ setOpenModal, openModal }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  }, [openModal]);

  return (
    <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
      {openModal == "modalA" ? (
        <section className="flex flex-col gap-8">
          <h3>Certificate buying</h3>

          <RequestBookingForm isCertificate={true} setOpenModal={setOpenModal} />
        </section>
      ) : loading ? (
        <LoadingScreen />
      ) : (
        <PromoCodeModal />
      )}
    </Modal>
  );
}
