# Typescript
After learning to use JavaScript, these tasks from the Holberton School curriculum will show us how to use TypeScript instead. With TypeScript, we can create scalable apps as unexpected behaviour will be caught, limiting mistakes as an app gets bigger — as much in its number of lines of code as in its number of users.<br/>

## Requirements
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All files will be transpiled on `Ubuntu 18.04`
* All files should end with a new line
* TS scripts will be checked with `jest` (version 24.9.*)
* Code should use the `ts` extension when possible
* The Typescript compiler should not show any warning or error when compiling

## General Information
__Number of tasks:__ 11<br/>
__Completed:__ TBA<br/>
__Passed:__ TBA<br/>

## Tasks Overview
#### 0. Creating an interface for a student
Write an interface named `Student` that accepts the following elements:
```
firstName: string
lastName: string
age: number
location: string
```
Then, create 2 students variables called `student1` and `student2` and store them into an array named `studentsList`. Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table that contains the first name of the student and their location. Every variable should use TypeScript when possible.<br/>When running, Webpack should return `No type errors found`.<br/>
See directory [task_0](./task_0)

#### 1. Let's build a Teacher interface
Write an interface named `Teacher` that accepts the following elements:
```
firstName: string - can only be set during initialization of an object of this interface
lastName: string - can only be set during initialization of an object of this interface
fullTimeEmployee: boolean
yearsOfExperience: number - optional
location: string
```
Add the possibility to add any attribute to the Teacher object like `contract(boolean)` without specifying the name of the attribute: Property should be a string, Type of this property can be anything.<br/>
See directory [task_1](./task_1)

#### 2. Extending the Teacher class
Write an interface named `Directors` that extends Teacher that requires the attribute `numberOfReports(number)`.<br/>
This was implemented by editing task_1's [main.ts](./task_1/js/main.ts) file.

#### 3. Printing teachers
In a `printTeacherFunction` interface, write a function `printTeacher` that accepts `firstName` and `lastName` as arguments. It should return the initial of `firstName` and the full `lastName`.<br/>
See task_1's [main.ts](./task_1/js/main.ts) file.