import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import addBooking from "../hooks/useCreateBooking";
import { useSelector } from "react-redux";
import Animated from "../components/Animated";

export default function ReservationConfirmed() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const onSubmit = async () => await addBooking(data);
    onSubmit();
    setTimeout(() => navigate("/"), 5000);
    setInterval(() => setTimer((prev) => prev - 1), 1000);
  }, []);

  return (
    <div className="flex items-center justify-center relative w-full mx-auto h-screen">
      <img
        src="images/ReservationSuccess/bgEnd.jpg"
        alt="bgEnd"
        className="absolute top-0 right-0 w-full h-full object-cover -z-10"
      />
      <div className="container">
        <Animated initialY={20} duration={1.5}>
          <div className="flex flex-col items-center">
            <img src="images/ReservationSuccess/success.png" alt="success" className="max-w-48" />
            <h2 className="text-48 text-white mt-14">Reservation Confirmed!</h2>
            <p className="text-24 text-white font-light text-center my-12">
              Thank you for choosing Mindori! <br />
              We can't wait to host you in the lap of luxury and nature.
            </p>

            <span className="text-18 font-extralight text-white text-center">
              You can find all the booking details at your email. <br /> Relocating to the main page after -{" "}
              {timer} sec
            </span>
          </div>
        </Animated>
      </div>
    </div>
  );
}
