export default function getDatesBetween(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const dates = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate).toISOString());
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return dates;
}
