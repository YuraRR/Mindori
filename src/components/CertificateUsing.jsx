export default function CertificateUsing({ data }) {
  const { title, text, id } = data;
  return (
    <div className="flex relative text-24 font-light max-w-[365px] pt-4 items-end my-6 md:my-12">
      <img
        className="absolute size-20 sm:size-32 md:size-fit bottom-0 -left-5 sm:left-0"
        src={`images/CertificatesPage/Numbers/${id}.svg`}
        alt={id}
      />
      <div className="max-w-[205px] sm:max-w-[320px] ml-auto">
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
