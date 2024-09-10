import React, { useState } from "react";
import { Input } from "@headlessui/react";
import useCertificates from "../hooks/useCertificates";
import { setCertificateInputPromoCode } from "../redux/features/certificateSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function GiftUsage() {
  const certificates = useCertificates();
  const [codeInput, setCodeInput] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    const certificate = certificates.find((cert) => cert.promoCode == codeInput);
    if (!certificate) return toast.error("Certificate invalid");

    if (!certificate.isUsed) {
      dispatch(setCertificateInputPromoCode(certificate));
      toast.success("Certificate added");
    } else {
      toast.error("Certificate is used");
    }
  }
  return (
    <div>
      <h3 className="text-24 font-medium pt-6 pb-3">Use a gift card/promo code</h3>
      <div className="flex relative">
        <Input
          name={"gift"}
          id={"gift"}
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          placeholder={"XXXX-XXXX-XXXX"}
          maxLength={14}
          className="border border-darkGreen border-opacity-50 max-h-[48px] w-full my-6 py-3 pl-5 text-18 bg-lightBeige text-lightGray"
        />

        <span className="text-12 absolute left-3 top-3 bg-lightBeige px-1">Expiration Date</span>
        <button
          type="button"
          onClick={() => handleClick()}
          className="absolute right-3 top-9 sm:top-8 text-14 sm:text-18"
        >
          Apply
        </button>
      </div>

      <span className="text-14 font-light flex gap-2">
        <img src="ui/info.svg" alt="info" />
        Gift cards are non-refundable if the host accepts your booking
      </span>
    </div>
  );
}
