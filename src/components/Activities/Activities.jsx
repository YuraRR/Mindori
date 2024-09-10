import styles from "./Activities.module.css";
import activitiesImages from "../../constants/activitiesImages";
import useResize from "../../hooks/useResize";
import Animated from "../Animated";

export default function Activities() {
  const width = useResize();
  const orderedImages = activitiesImages.sort((a, b) => a.orderMobile - b.orderMobile);

  return (
    <Animated scale={0.7} initialX={0} initialY={0} delay={0.3} duration={1.1}>
      <section>
        <h2 className="mt-14 sm:mt-28 mb-7 sm:mb-14">What To Do At Mindori</h2>
        {width > 480 ? (
          <div className={styles.gridPc}>
            {activitiesImages.map((img) => (
              <div
                key={img.image}
                className={`${styles[`i${img.orderPc}`]} relative hover:scale-105 transition-all ease-linear`}
              >
                <img src={`images/CertificatesPage/Activities/${img.image}.png`} alt={img.image} className="" />
                <p className="absolute bottom-0 text-white font-glock text-10 md:text-12 w-full lg:text-14 bg-transBlack p-2 lg:p-6 text-center">
                  {width > 780 ? img.text : img.textMobile}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.gridMobile}>
            {orderedImages.map((img) => (
              <div key={img.image} className={`${styles[`i${img.orderMobile}`]} relative`}>
                <img src={`images/CertificatesPage/Activities/${img.image}-m.png`} alt={img.image} />
                <p className="absolute bottom-0 text-white font-glock text-10 w-full bg-transBlack px-1 py-2 text-center">
                  {img.textMobile}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </Animated>
  );
}
