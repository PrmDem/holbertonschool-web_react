interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): void;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) =>
  console.log(`${firstName.substring(0, 1)}. ${lastName}`);

const teacher1: Teacher = {
  firstName: 'Bob',
  fullTimeEmployee: true,
  lastName: 'Ross',
  location: 'Florida',
  canPaint: true,
};

const director1: Directors = {
  firstName: 'Anders',
  lastName: 'Hejlsberg',
  location: 'Denmark',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(teacher1);
printTeacher("Bob", "Ross");
