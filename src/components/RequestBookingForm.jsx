// RequestBookingForm.jsx
import { useForm } from "react-hook-form";
import Button from "../ui/Button/Button";
import { creditCardForm } from "../constants/formsData";
import InputsBlock from "../ui/InputsBlock";
import { useNavigate } from "react-router-dom";
import GiftUsage from "./GiftUsage";
import { useDispatch, useSelector } from "react-redux";
import useCertificateAsUsed from "../hooks/useCertificateAsUsed";
import { useState } from "react";
import { setCertificateInputPromoCode } from "../redux/features/certificateSlice";

export default function RequestBookingForm({ isCertificate, setOpenModal }) {
  const certificateInputPromoCode = useSelector((state) => state.data.certificateInputPromoCode);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({ mode: "onSubmit" });

  const onSubmit = () => {
    setLoading(true);
    if (isCertificate) {
      setOpenModal("modal2");
      setLoading(false);
    } else {
      setTimeout(() => {
        navigate("/reservationConfirmed");
        useCertificateAsUsed(certificateInputPromoCode?.promoCode);
        dispatch(setCertificateInputPromoCode({ promoCode: null, amount: 0, isUsed: false }));
        setLoading(false);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[540px]">
      <InputsBlock arr={creditCardForm} start={0} end={2} {...{ control }} />
      <div className="flex gap-6 lg:gap-[60px] w-full">
        <InputsBlock arr={creditCardForm} start={2} end={4} {...{ control }} />
      </div>
      {!isCertificate ? (
        <>
          <GiftUsage creditCardForm={creditCardForm} />
          <div className="mt-8 sm:mt-12 hidden lg:flex">
            <Button className="longButton" type="submit" loading={loading}>
              Request booking
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-8 sm:mt-12 flex">
          <Button className="longButton" type="submit" loading={loading} waitLoading={true}>
            Buy certificate
          </Button>
        </div>
      )}
    </form>
  );
}
