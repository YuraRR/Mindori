import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactInformationForm from "./ContactInformationForm";
import useCreateCertificate from "../hooks/useCreateCertificate";
import { toast } from "sonner";

export default function PromoCodeModal() {
  const code = useSelector((state) => state.certificate.certificatePromoCode);
  const certificateAmount = useSelector((state) => state.certificate.certificateAmount);

  useCreateCertificate(certificateAmount);

  function copyText() {
    navigator.clipboard.writeText(code);
    toast.success("Promocode copied!");
  }

  return (
    <>
      <div className="flex flex-col gap-2 mb-6 cursor-pointer" onClick={copyText}>
        <span>Click to copy</span>
        <div className="flex gap-3 items-center">
          <span className="text-24 font-sans">{code}</span>
          <img className="w-6" src="icons/copy-icon.svg" alt="copy" />
        </div>
      </div>
      <ContactInformationForm isCertificate={true} />
    </>
  );
}
