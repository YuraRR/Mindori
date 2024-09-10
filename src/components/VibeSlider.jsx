import { useState } from "react";
import useResize from "../hooks/useResize";
import Animated from "./Animated";

export default function VibeSlider({ images }) {
  const [translate, setTranslate] = useState(0);
  const [dotCounter, setDotCounter] = useState(0);
  const width = useResize();
  const translateValue = width > 1024 ? 320 : 150;

  const orderedImages = images.sort((a, b) => a.orderPc - b.orderPc);

  function moveRight() {
    if (dotCounter < orderedImages.length - 1) {
      setTranslate(translate - translateValue);
      setDotCounter(dotCounter + 1);
    } else {
      setTranslate(0);
      setDotCounter(0);
    }
  }

  function moveLeft() {
    if (dotCounter > 0) {
      setTranslate(translate + translateValue);
      setDotCounter(dotCounter - 1);
    } else {
      setTranslate(-translateValue * (orderedImages.length - 1));
      setDotCounter(orderedImages.length - 1);
    }
  }
  function dotClick(index) {
    setTranslate(-translateValue * index);
    setDotCounter(index);
  }

  return (
    <>
      <Animated initialY={0} initialX={-800} duration={1} delay={0.3}>
        <div
          className="flex transition-transform ease-linear duration-300 gap-5"
          style={{ transform: `translateX(${translate}px)` }}
        >
          {orderedImages.map(({ name }) => (
            <img
              key={name}
              className="max-h-[200px] lg:max-h-[400px] object-contain"
              src={`images/MainPage/Slider/${name}.webp`}
              alt={name}
            />
          ))}
        </div>
      </Animated>
      <button onClick={moveLeft}>
        <img
          className="w-10 absolute left-5 top-16 opacity-80 hover:scale-110 lg:top-40 lg:w-12 "
          src="icons/arrow.png"
          alt="left arrow"
        />
      </button>
      <button onClick={moveRight}>
        <img
          className="w-10 rotate-180 absolute right-5 top-16 opacity-80 hover:scale-110 lg:top-40 lg:w-12"
          src="icons/arrow.png"
          alt="right arrow"
        />
      </button>
      <div className="flex items-center justify-center w-full gap-3">
        {orderedImages.map(({ orderPc }) => (
          <button key={orderPc} onClick={() => dotClick(orderPc)}>
            <img
              src={`icons/${dotCounter === orderPc ? "activeDot" : "smallDot"}.svg`}
              alt={`dot ${orderPc}`}
              className="hover:scale-110 p-2 mt-2"
            />
          </button>
        ))}
      </div>
    </>
  );
}
