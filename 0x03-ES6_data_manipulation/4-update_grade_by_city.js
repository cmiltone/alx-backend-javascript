export default function updateStudentGradeByCity(arr, city, grades) {
  if (!(arr instanceof Array)) return [];

  return arr.map((item) => {
    let grade = 'N/A';
    if (grades.find((a) => a.studentId === item.id)) {
      grade = grades.find((a) => a.studentId === item.id).grade;
    }
    return {
      ...item,
      ...{ grade },
    };
  }).filter((a) => a.location === city);
}
