export default function VibeImages({ images }) {
  const orderedImages = images.sort((a, b) => a.orderMobile - b.orderMobile);
  return (
    <div className="container">
      <div className="flex flex-wrap gap-3 justify-center xs:max-w-[630px] mx-auto">
        {orderedImages.map(({ name }) => (
          <img
            key={name}
            src={`images/MainPage/Slider/${name}.webp`}
            alt={name}
            className="max-h-[120px] xs:max-w-[188px] xs:max-h-[164px]"
          />
        ))}
      </div>
    </div>
  );
}
