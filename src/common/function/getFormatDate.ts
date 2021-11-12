export function getDotFormatDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return {year, month: `${month}.${day}`};
}

export function getHyphonFormatDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return `${year}-${month}`;
}
