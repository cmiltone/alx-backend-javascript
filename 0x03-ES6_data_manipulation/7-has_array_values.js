export default function hasValuesFromArray(set, arr) {
  const allThere = arr.every((item) => set.has(item));

  return allThere;
}
