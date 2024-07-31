import SelectElem from "../ui/SelectElem";
import Button from "../ui/Button/Button";
export default function HowToBuyCertificate() {
  const data = [250, 500, 1000, 2000, 3000];
  return (
    <section className="">
      <h2 className="pt-12 sm:pt-24">How to buy a certificate</h2>
      <p className="text-24 font-light py-8 sm:py-[60px] max-w-[720px]">
        Please choose the amount for which you want to buy a certificate. The certificate is valid for 1 year
      </p>
      <div className="flex justify-between md:max-w-[520px] items-center gap-5">
        <SelectElem data={data} buttonText="Choose the ammount" />
        <Button className="mainButton">Buy a certificate</Button>
      </div>
    </section>
  );
}
