export default function cleanSet(set, str) {
  if (!str) return '';
  const arr = Array.from(set);
  const strs = [];

  arr.filter((item) => typeof item === 'string' && item.startsWith(str)).map((item) => strs.push(item.replace(str, '')));

  return Array.from(new Set(strs)).join('-');
}
