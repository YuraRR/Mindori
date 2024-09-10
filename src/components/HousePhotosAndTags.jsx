export default function HousePhotosAndTags({ title, images, extraTags }) {
  return (
    <section className="w-full mt-16 sm:mt-24">
      <h2>{title}</h2>
      <figure className="flex max-h-[585px] mt-12 justify-center lg:justify-between">
        <img src={`images/Houses/${title}.png`} alt={title} className="w-[847px] object-cover" />
        <div className="hidden lg:grid grid-cols-2 gap-5 ml-5">
          {images.map((img, index) => (
            <img
              key={index}
              src={`images/Houses/${img}.png`}
              alt={img}
              className="max-h-[130px] w-[196px] object-cover"
            ></img>
          ))}
        </div>
      </figure>
      <ul className="flex flex-wrap text-18 font-light gap-4 mt-12 justify-center xl:justify-between">
        {Object.entries(extraTags).map(([key, value]) => (
          <li
            key={key}
            className="flex min-w-[100px] xs:min-w-[147px] sm:min-w-[165px] max-w-[200px] gap-2 sm:border border-darkGreen sm:px-4 sm:py-3 items-center font-light"
          >
            <img src={`images/BookingSelectPage/TagsIcons/${key}.svg`} alt={key} className="w-6" />
            {value}
          </li>
        ))}
      </ul>
    </section>
  );
}
