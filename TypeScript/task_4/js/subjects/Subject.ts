namespace Subjects {
  export class Subject {
    teacher: Teacher;

    constructor(first: string, last: string) {
      this.teacher = {
        firstName: first,
        lastName: last
      }
    }

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
