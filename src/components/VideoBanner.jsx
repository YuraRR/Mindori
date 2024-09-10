import Animated from "./Animated";

export default function VideoBanner({ videoName, title, size }) {
  return (
    <Animated initialY={0} duration={0.7} scale={1.05}>
      <div
        className={`flex items-center justify-center  relative w-full mx-auto ${
          size == "height" ? "h-screen lg:h-[440px]" : "h-[324px] sm:h-[440px]"
        }`}
      >
        <video className="absolute top-0 right-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline>
          <source src={`videos/${videoName}.mp4`} type="video/mp4" />
        </video>
        <section className="flex sm:items-center flex-col z-10">
          <img className="pt-4 sm:pt-16 size-36 sm:size-52 mx-auto" src="images/Logo.svg" alt="logo" />
          <h2 className="pt-6 sm:pt-8 text-white text-center">{title}</h2>
        </section>
      </div>
    </Animated>
  );
}
