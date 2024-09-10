import extraServicesData from "../../constants/extraServicesData";
import { useSelector } from "react-redux";

export default function SummaryPricesList({ isExtraServices, house, daysDiff }) {
  const extraServices = useSelector((state) => state.data.selectedServices);
  const certificateInputPromoCode = useSelector((state) => state.certificate.certificateInputPromoCode);
  console.log(certificateInputPromoCode);

  const { isUsed, amount, promoCode } = certificateInputPromoCode;
  const feeAmount = 30;

  function findServiceQuantity(title) {
    return extraServices.find((service) => service.title == title).quantity;
  }

  function findTotalPrice() {
    let extraServicesPrice = 0;
    extraServices.forEach(({ title, quantity }) => {
      const serviceData = extraServicesData.find((service) => service.title == title);
      extraServicesPrice += serviceData.price * quantity;
    });

    let sum = house.price * daysDiff + extraServicesPrice + feeAmount;
    !isUsed && (sum -= amount);

    return sum > 0 ? sum : 0;
  }
  const totalPrice = findTotalPrice();

  return (
    <ul className="*:flex *:justify-between *:w-full">
      <li className="sm:border-t p-2 py-4 border-darkGreen">
        <span className="text-20">{house.price} x 1 night</span>
        <span className="text-24">{house.price * daysDiff}$</span>
      </li>

      <li className="p-2 py-4">
        <span className="text-20">Service Fee</span>
        <span className="text-24">{feeAmount}$</span>
      </li>

      {isExtraServices &&
        extraServicesData.map(
          ({ id, title, price }) =>
            findServiceQuantity(title) > 0 && (
              <li key={id} className="p-2 py-5">
                <span className="text-20">
                  {title} x {findServiceQuantity(title)}
                </span>
                <span className="text-24">{findServiceQuantity(title) * price}$</span>
              </li>
            )
        )}
      {promoCode && (
        <li className="p-2 py-5">
          <span className="text-20">{"Certificate"}</span>
          <span className="text-24">{-amount}$</span>
        </li>
      )}

      <li className="text-24 p-2 py-5 border-t  border-darkGreen">
        <span>Total: </span>
        <span className="text-darkGreen">{totalPrice}$</span>
      </li>
    </ul>
  );
}
