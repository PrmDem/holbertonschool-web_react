interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Anders",
  lastName: "Hejlsberg",
  age: 65,
  location: "Denmark"
};

const student2: Student = {
  firstName: "Brendan",
  lastName: "Eich",
  age: 65,
  location: "USA"
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((row) => {
  const tr = table.insertRow();
  const tdFirst = tr.insertCell();
  tdFirst.innerText = row.firstName;
  const tdLoc = tr.insertCell();
  tdLoc.innerText = row.location;
});
