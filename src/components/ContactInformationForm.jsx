import { useForm } from "react-hook-form";
import Button from "../ui/Button/Button";
import InputsBlock from "../ui/InputsBlock";
import { formFields } from "../constants/formsData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import sendPromoCodeEmail from "../utils/sendPromoCodeEmail";
import { setContactInfo } from "../redux/features/dataSlice";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ContactInformationForm({ house, isCertificate }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const certificateAmount = useSelector((state) => state.data.certificateAmount);
  const code = useSelector((state) => state.data.certificatePromoCode);
  const contactInformation = useSelector((state) => state.data.contactInformation);
  const { handleSubmit, control, reset } = useForm({ mode: "onSubmit" });

  const [loadingEnd, setLoadingEnd] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    dispatch(setContactInfo({ ...data }));
    if (isCertificate) {
      sendPromoCodeEmail(code, certificateAmount, contactInformation).then((response) => {
        setLoadingEnd(response);
      });
    } else {
      navigate(`/requestBooking/${house.title}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[540px]">
      <InputsBlock arr={formFields} start={0} end={isCertificate ? 1 : 2} {...{ control }} />
      <InputsBlock arr={formFields} start={2} end={isCertificate ? 3 : 4} {...{ control }} />
      {isCertificate ? (
        <div className="mt-6">
          <Button
            className="longButton"
            type="submit"
            loadingEnd={loadingEnd}
            waitLoading={true}
            toastText={"Email sent 🤍"}
          >
            Send to email
          </Button>
        </div>
      ) : (
        <>
          <p className="text-24 mt-6 sm:mt-12 mb-8 sm:mb-16">
            By clicking <strong>Agree and continue</strong>, you agree to the Mindori
            <span className="text-darkGreen"> Terms and Conditions and Privacy Policy</span>
          </p>
          <Button className="longButton" type="submit" {...{ loading, setLoading }}>
            Agree and Continue
          </Button>
        </>
      )}
    </form>
  );
}
