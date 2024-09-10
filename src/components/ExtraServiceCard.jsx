import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../ui/Button/Button";
import QuantityElem from "../ui/QuantityElem";
import { updateExtraServices } from "/src/redux/features/dataSlice";

export default function ExtraServiceCard({ title, text, price }) {
  const [quantity, setQuantity] = useState(0);

  const extraServices = useSelector((state) => state.data.selectedServices);
  const dispatch = useDispatch();

  function saveQuantity(title, quantity) {
    dispatch(updateExtraServices({ title, quantity }));
  }

  return (
    <section
      className={`flex flex-col items-center xs:flex-row max-w-[330px] xs:max-w-[737px]
      border border-darkGreen border-opacity-50 p-[10px] md:p-6 gap-3 md:gap-6 w-full`}
    >
      <img
        src={`images/ExtraServices/${title}.jpg`}
        alt={title}
        className="max-w-52 xs:max-w-[200px] object-contain  md:max-w-[300px]"
      />
      <div className="flex flex-col gap-3 w-full mx-auto">
        <h3 className="text-24">{title}</h3>
        <p className="text-12 xs:text-20 font-light max-w-[364px]">{text}</p>

        <div className="flex flex-row-reverse md:flex-col  w-full justify-between gap-2 sm:gap-4">
          <div className="flex items-center justify-between mt-auto relative">
            <span className="text-12 absolute left-3 -top-2 bg-lightBeige px-1 sm:bg-none md:static md:text-18 font-light text-darkGray">
              Guests
            </span>

            <QuantityElem quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="flex items-center justify-between flex-col md:flex-row w-full gap-3">
            <span className="text-24 text-darkGreen font-glock mr-auto">{price}$</span>
            <div className="flex justify-end w-full" onClick={() => saveQuantity(title, quantity)}>
              <Button className="smallButton" toastText={quantity > 0 ? `${title} added` : `${title} removed`}>
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
