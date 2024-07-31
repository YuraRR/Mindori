import styles from "./Activities.module.css";
import activitiesImages from "../../constants/activitiesImages";
import useResize from "../../hooks/useResize";

export default function Activities() {
  const width = useResize();
  const orderedImages = activitiesImages.sort((a, b) => a.orderMobile - b.orderMobile);

  return (
    <section>
      {width > 480 ? (
        <div className={styles.gridPc}>
          {activitiesImages.map((img) => (
            <img
              key={img.image}
              className={styles[`i${img.orderPc}`]}
              src={`images/CertificatesPage/Activities/${img.image}.png`}
              alt={img.image}
            />
          ))}
        </div>
      ) : (
        <div className={styles.gridMobile}>
          {orderedImages.map((img) => (
            <img
              key={img.image}
              className={styles[`i${img.orderMobile}`]}
              src={`images/CertificatesPage/Activities/${img.image}-m.png`}
              alt={img.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}
