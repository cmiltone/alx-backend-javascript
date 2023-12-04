export default function getStudentIdsSum(arr) {
  if (!(arr instanceof Array)) return [];
  return arr.map((item) => item.id).reduce((a, b) => a + b, 0);
}
