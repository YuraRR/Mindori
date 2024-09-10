export default function OfferCard({ data, imageRoute }) {
  return (
    <div className="flex sm:items-center gap-3 py-3">
      <img className="max-w-20 md:max-w-32" src={`${imageRoute}/${data.title}.svg`} alt={data.title} />
      <div className="max-w-full sm:max-w-[282px] px-2">
        <h4 className="text-28 font-normal">{data.title}</h4>
        <p className="text-18 font-light">{data.text}</p>
      </div>
    </div>
  );
}
