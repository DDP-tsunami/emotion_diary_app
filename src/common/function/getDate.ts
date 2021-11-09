export default function getDate(date: string): Date {
  const year = parseInt(date.substring(0, 4), 10);
  const month = parseInt(date.substring(5, 7), 10);
  const day = parseInt(date.substring(8, 10), 10);

  return new Date(year, month - 1, day, 10);
}
