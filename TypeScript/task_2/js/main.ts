interface DirectorInterface {
  workFromHome(): void;
  getCoffeeBreak(): void;
  workDirectorTasks(): void;
}

interface TeacherInterface {
  workFromHome(): void;
  getCoffeeBreak(): void;
  workTeacherTasks(): void;
}

class Director implements DirectorInterface {
  workFromHome() {
    console.log("Working from home");
  }
  getCoffeeBreak() {
    console.log("Getting a coffee break");
  }
  workDirectorTasks() {
    console.log("Getting to director tasks");
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    console.log("Cannot work from home");
  }
  getCoffeeBreak() {
    console.log("Cannot have a break");
  }
  workTeacherTasks() {
    console.log("Getting to work");
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof (salary) === 'number' && salary < 500) {
    return new Teacher;
  }
  return new Director;
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): void {
  if (todayClass === 'Math') {
    console.log('Teaching Math');
  } else {
    console.log('Teaching History');
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(2000));
teachClass('Math');
teachClass('History');
