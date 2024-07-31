import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function useDaysDiff() {
  const startDate = useSelector((state) => state.dates.startDate);
  const endDate = useSelector((state) => state.dates.endDate);

  const daysDiff = useMemo(() => {
    if (!startDate || !endDate) return 0;

    const firstDay = new Date(startDate);
    const lastDay = new Date(endDate);

    const timeDiff = Math.abs(lastDay - firstDay);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }, [startDate, endDate]);

  return daysDiff;
}
