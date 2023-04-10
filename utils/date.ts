export function extractHour(date: string) {
  const dt = new Date(date);
  let mins = dt.getMinutes();
  let hours = dt.getHours();
  return `${addZero(hours)}:${addZero(mins)}`;
}

function addZero(n: number) {
  if (n < 10) return '0' + n;
  else return n;
}