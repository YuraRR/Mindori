import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function useFormatDate() {
  const startDate = useSelector((state) => state.data.startDate);
  const endDate = useSelector((state) => state.data.endDate);
  const formatDates = useMemo(() => {
    const firstDay = new Date(startDate);
    const lastDay = new Date(endDate);
    if (!startDate || !endDate) return "Select dates";

    const options = { month: "short", day: "numeric" };
    return `${firstDay.toLocaleDateString("en-US", options)} - ${lastDay.toLocaleDateString("en-US", options)}`;
  }, [startDate, endDate]);

  return formatDates;
}
