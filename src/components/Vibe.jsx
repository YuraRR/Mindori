import VibeSlider from "./VibeSlider";
import VibeImages from "./VibeImages";
import sliderImages from "../constants/sliderImages";
import useResize from "../hooks/useResize";
import Animated from "./Animated";
export default function Vibe() {
  const width = useResize();
  return (
    <Animated>
      <div className="container">
        <h2 className="pb-8 mt-[120px]">Vibe</h2>
      </div>
      <section name="Vibe" className="relative overflow-hidden flex flex-col">
        {width > 768 ? <VibeSlider images={sliderImages} /> : <VibeImages images={sliderImages} />}
      </section>
      <div className="container">
        <p className="font-hortensia mt-7 max-w-[1061px] text-center md:mx-auto text-24 sm:mt-14 mx-5 border-darkGreen border-b pb-8">
          Come to us with the whole family, with your soulmate or with a group of friends. This is a space where
          you can recuperate: nature, the smell of a fire, fresh air, sunsets and sunrises that remain in your
          memory, “your” people around, our sincere concern for you.
        </p>
      </div>
    </Animated>
  );
}
