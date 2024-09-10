import SelectElem from "../ui/SelectElem";
import Button from "../ui/Button/Button";
import Animated from "./Animated";
import { setCertificateAmount } from "../redux/features/certificateSlice";

import { useDispatch } from "react-redux";
import CertificateModals from "./CertificateModals";
import { useState } from "react";

export default function HowToBuyCertificate() {
  const data = [250, 500, 1000, 2000, 3000];
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(null);

  function saveData(item) {
    dispatch(setCertificateAmount(item));
  }

  return (
    <Animated>
      <section className="">
        <h2 className="mt-14 sm:mt-28 mb-7 sm:mb-14">How to buy a certificate</h2>
        <p className="text-24 font-light py-8 sm:py-[60px] max-w-[720px]">
          Please choose the amount for which you want to buy a certificate. The certificate is valid for 1 year
        </p>
        <div className="flex justify-between md:max-w-[520px] items-center gap-5 *:max-w-[240px]">
          <SelectElem data={data} buttonText="Choose the amount" defaultValue={1000} action={saveData} />
          <Button onClick={() => setOpenModal("modalA")} className="mainButton">
            Buy a certificate
          </Button>
        </div>
      </section>
      <CertificateModals {...{ setOpenModal, openModal }} />
    </Animated>
  );
}
