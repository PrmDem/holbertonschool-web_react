namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): void {
      console.log("Here is the list of requirements for Java");
    }
    getAvailableTeacher(): void {
      if (this.teacher.experienceTeachingJava !== 0) {
        console.log('Available Teacher: ' + this.teacher.firstName);
      } else {
        console.log("No available teacher");
      }
    }
  }
}
