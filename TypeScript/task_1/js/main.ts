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


interface StudentConstructor {
  new(firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): void;
  displayName(): void;
}

function createStudent(
  ctor: StudentConstructor,
  firstName: string,
  lastName: string
): StudentInterface {
  return new ctor(firstName, lastName);
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    console.log('Currently working');
  }
  displayName() {
    console.log(`${this.firstName}`);
  }
}

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

let student1 = createStudent(StudentClass, 'Greta', 'Thunberg');
student1.workOnHomework();
student1.displayName();

console.log(director1);
console.log(teacher1);
printTeacher("Bob", "Ross");
