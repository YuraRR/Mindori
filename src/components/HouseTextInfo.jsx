export default function HouseTextInfo({ textInfo, info }) {
  return (
    <div className="max-w-[752px]">
      <h2>Information</h2>
      <p className="mt-6 md:mt-12 text-24">{textInfo}</p>
      <ul className="marker:text-xs py-6 sm:py-12 text-24">
        {info.map((item, index) => (
          <li className="ml-6 list-disc" key={index}>
            {item.fullText || item.text}
          </li>
        ))}
      </ul>

      <p className="text-24">
        Save big and keep it simple! Book our full package online at a discounted rate. Embrace the best value for
        your unforgettable glamping adventure without worrying about extra costs during your getaway.
      </p>
    </div>
  );
}
