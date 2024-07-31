import faqQuestions from "../constants/faqQuestions";
import DisclosureElem from "../ui/DisclosureElem/DisclosureElem";
export default function Faq() {
  return (
    <div name="FAQ" className="container">
      <section className="mt-6 sm:mt-12">
        <h2>FAQ</h2>
        <div>
          {faqQuestions.map((e) => (
            <DisclosureElem key={e.id} title={e.title} text={e.text}></DisclosureElem>
          ))}
        </div>
      </section>
    </div>
  );
}
