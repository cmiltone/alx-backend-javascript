export default function cleanSet(set, str) {
  if (!str) return '';
  const arr = Array.from(set);

  return arr.filter((item) => item.includes(str)).map((item) => item.replace(str, '')).join('-');
}
