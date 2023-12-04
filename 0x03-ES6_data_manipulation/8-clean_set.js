export default function cleanSet(set, str) {
  if (!set || !str || !(set instanceof Set) || typeof str !== 'string') return '';
  const arr = Array.from(set);
  const strs = [];

  arr.filter((item) => typeof item === 'string' && item.startsWith(str) && item !== str).forEach((item) => { if (item.substring(str.length)) strs.push(item.substring(str.length)); });

  return Array.from(new Set(strs)).join('-');
}
