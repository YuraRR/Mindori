import faqQuestions from "../constants/faqQuestions";
import DisclosureElem from "../ui/DisclosureElem/DisclosureElem";
import Animated from "./Animated";
export default function Faq() {
  return (
    <Animated>
      <div name="FAQ" className="container">
        <section className="mt-6 sm:mt-12">
          <h2>FAQ</h2>
          <div className="mt-8">
            {faqQuestions.map((e) => (
              <DisclosureElem key={e.id} title={e.title} text={e.text} />
            ))}
          </div>
        </section>
      </div>
    </Animated>
  );
}
