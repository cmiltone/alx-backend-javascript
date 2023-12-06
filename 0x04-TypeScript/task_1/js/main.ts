interface Teacher extends Record<string, any> {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): void => {
  console.log(`${firstName.charAt(0)}. ${lastName}`)
}