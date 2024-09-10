import styles from "./MainBanner.module.css";
import Button from "../../ui/Button/Button";
import Animated from "../Animated";

export default function MainBanner() {
  return (
    <Animated initialY={0} duration={0.8} scale={1.5}>
      <div name="Home" className={styles.videoContainer}>
        <video autoPlay muted loop playsInline>
          <source src="videos/bg-video.mp4" type="video/mp4" />
        </video>

        <section className="flex sm:items-center flex-col z-10 h-full justify-end mb-16 px-4">
          <img className="pb-4 sm:pb-12 size-36 sm:size-60 mx-auto" src="images/Logo.svg" alt="logo" />
          <h1 className="pb-4 sm:pb-6">Unleash Your Adventure: Georgia's Premier Glamping Haven </h1>
          <span className="pb-4 sm:pb-24 max-w-64 sm:max-w-full text-24 text-white font-extralight">
            Reconnect with Nature and Rediscover Yourself
          </span>
          <Button linkTo={"/booking"}>Book now</Button>
        </section>
      </div>
    </Animated>
  );
}
