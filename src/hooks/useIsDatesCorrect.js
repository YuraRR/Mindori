import { useSelector } from "react-redux";
import useFormatDate from "../hooks/useFormatDate";
import { useMemo } from "react";

export default function useIsDatesCorrect() {
  const formatedDates = useFormatDate();
  const startDate = useSelector((state) => state.data.startDate);
  const endDate = useSelector((state) => state.data.endDate);

  return useMemo(() => {
    if (formatedDates == "Select dates") {
      return {
        start: startDate && !endDate,
        end: endDate && !startDate,
      };
    }
    return { start: true, end: true };
  }, [formatedDates, startDate, endDate]);
}
