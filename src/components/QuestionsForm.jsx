import Button from "../ui/Button/Button";
import { questionsForm } from "../constants/formsData";
import { useForm } from "react-hook-form";
import InputsBlock from "../ui/InputsBlock";
import Animated from "./Animated";
import { toast } from "sonner";

export default function QuestionsForm() {
  const { handleSubmit, control, reset } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (data) {
      toast.success("Form sent, we will contact you soon!");
    }
  };

  return (
    <Animated>
      <section className="overflow-x-hidden">
        <p className="text-24 font-light py-8 sm:py-[60px] max-w-[1003px]">
          If you have any questions, fill in the contact form, and our managers will contact you shortly. We'll
          discuss the information about the best options tailored to your preferences and requirements
        </p>

        <Animated initialX={400} initialY={0} delay={0.5} duration={1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center pt-3 pb-8 border border-opacity-50 border-darkGreen max-w-[413px] p-9"
          >
            <InputsBlock arr={questionsForm} start={0} control={control} />
            <div className="w-full flex justify-center py-4">
              <Button className="mainButton" type="submit">
                Send a form
              </Button>
            </div>
          </form>
        </Animated>
      </section>
    </Animated>
  );
}
