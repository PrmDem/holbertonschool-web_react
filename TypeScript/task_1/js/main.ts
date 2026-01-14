interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
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

console.log(teacher1, teacher2);
