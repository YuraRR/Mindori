export default function QuantityElem({ quantity, setQuantity }) {
  function quantityMinus() {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  }
  function quantityPlus() {
    setQuantity((prev) => (prev < 10 ? prev + 1 : 10));
  }

  return (
    <div className="flex justify-between items-center w-full min-w-36 max-w-48 md:max-w-40  h-12 sm:h-[40px] px-4 border border-darkGreen border-opacity-50">
      <button onClick={() => quantityMinus()}>
        <img className="w-5 h-5" src="ui/minus.svg" alt="" />
      </button>
      <span className="text-20 font-light  font-canela">{quantity}</span>
      <button onClick={() => quantityPlus()}>
        <img className="w-5" src="ui/plus.svg" alt="" />
      </button>
    </div>
  );
}
