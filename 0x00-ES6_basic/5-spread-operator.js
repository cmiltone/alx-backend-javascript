export default function concatArrays(array1, array2, string) {
  const array3 = string.split('');

  return [...array1, ...array2, ...array3];
}
