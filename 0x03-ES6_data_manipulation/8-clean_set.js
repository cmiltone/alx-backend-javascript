export default function cleanSet(set, str) {
  if (!str) return '';
  const arr = Array.from(set);
  const strs = [];

  arr.filter((item) => typeof item === 'string' && item.startsWith(str) && item !== str).map((item) => strs.push(item.substring(str.length)));

  return Array.from(new Set(strs)).join('-');
}
