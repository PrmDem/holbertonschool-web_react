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

const teacher1: Teacher = {
  firstName: 'Bob',
  fullTimeEmployee: true,
  lastName: 'Ross',
  location: 'Florida',
  canPaint: true,
};

const teacher2: Teacher = {
  firstName: 'Fred',
  fullTimeEmployee: false,
  lastName: 'Rogers',
  location: 'Pennsylvania',
  wearsCardigan: true,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(teacher1, teacher2);
