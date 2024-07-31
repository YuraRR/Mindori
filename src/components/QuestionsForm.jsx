import InputElem from "../ui/InputElem";
import Button from "../ui/Button/Button";

export default function QuestionsForm() {
  return (
    <section>
      <p className="text-24 font-light py-8 sm:py-[60px] max-w-[1003px]">
        If you have any questions, fill in the contact form, and our managers will contact you shortly. We'll
        discuss the information about the best options tailored to your preferences and requirements
      </p>

      <form className="flex flex-col items-center pt-3 pb-8  border border-opacity-50 border-darkGreen max-w-[413px]">
        <InputElem title={"Name"} placeholder="Enter your name" type="name"></InputElem>
        <InputElem title={"Phone number"} placeholder="+380000000000000" type="number"></InputElem>
        <InputElem title={"E-mail"} placeholder="guest@gmail.com" type="email"></InputElem>
        <Button className="mainButton">Send a form</Button>
      </form>
    </section>
  );
}
