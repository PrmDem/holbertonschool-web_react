namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): void {
      console.log("Here is the list of requirements for React");
    }
    getAvailableTeacher(): void {
      if (this.teacher.experienceTeachingReact !== 0) {
        console.log('Available Teacher: ' + this.teacher.firstName);
      } else {
        console.log("No available teacher");
      }
    }
  }
}
