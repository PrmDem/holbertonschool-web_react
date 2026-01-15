namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): void {
      console.log("Here is the list of requirements for Cpp");
    }
    getAvailableTeacher(): void {
      if (this.teacher.experienceTeachingC !== 0) {
        console.log('Available Teacher: ' + this.teacher.firstName);
      } else {
        console.log("No available teacher");
      }
    }
  }
}
