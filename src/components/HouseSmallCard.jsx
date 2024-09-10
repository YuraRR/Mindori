import { useState } from "react";
import { useParams } from "react-router-dom";
import HouseTextInfo from "./HouseTextInfo";
import Modal from "./Modal/Modal";

export default function HouseSmallCard({ title, tags, textInfo, info, price }) {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="flex max-w-[737px] w-full  border border-darkGreen p-3 md:p-6 gap-3 md:gap-6 ">
      <img
        src={`images/Houses/${title}.png`}
        alt={title}
        className="max-w-36 xs:max-w-[200px] object-contain  md:max-w-[300px]"
      />
      <div className="flex flex-col w-full">
        <h3 className="text-24">{title}</h3>
        <ul className="hidden md:grid grid-cols-2 text-18 font-light gap-5 mt-4 max-w-[272px] w-full justify-between">
          {Object.entries(tags)
            .slice(0, 4)
            .map(([key, value]) => (
              <li key={key} className="flex gap-2 items-center font-light">
                <img src={`images/BookingSelectPage/TagsIcons/${key}.svg`} alt={key} className="w-6" />
                {value}
              </li>
            ))}
        </ul>
        <div className="flex mt-auto justify-between md:mt-20">
          <span className="text-24 font-glock h-full max-h-4 text-darkGreen">{price}$</span>
          <button onClick={() => setOpenModal(true)} className="text-darkGreen text-18">
            More
          </button>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="py-6">
          <HouseTextInfo textInfo={textInfo} info={info} />
        </div>
      </Modal>
    </section>
  );
}
