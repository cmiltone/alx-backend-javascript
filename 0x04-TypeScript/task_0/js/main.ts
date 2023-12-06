interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: 'Fred',
    lastName: 'Don',
    age: 24,
    location: 'Nairobi'
  },
  {
    firstName: 'Daniel',
    lastName: 'Giggs',
    age: 22,
    location: 'Arusha'
  }
];

const table = document.createElement('table');

// table title
let tr = document.createElement('tr');
let td = document.createElement('td');

td.innerHTML = 'Name';
tr.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'Age';
tr.appendChild(td);

td = document.createElement('td');
td.innerHTML = 'Location';
tr.appendChild(td);

table.appendChild(tr);

// first row
tr = document.createElement('tr');
td = document.createElement('td');
td.innerHTML = `${studentsList[0].firstName} ${studentsList[0].lastName}`;
tr.appendChild(td);

td = document.createElement('td');
td.innerHTML = `${studentsList[0].age}`;
tr.appendChild(td);

td = document.createElement('td');
td.innerHTML = studentsList[0].location;
tr.appendChild(td);

table.appendChild(tr);

// second row
tr = document.createElement('tr');
td = document.createElement('td');
td.innerHTML = `${studentsList[1].firstName} ${studentsList[1].lastName}`;
tr.appendChild(td);

td = document.createElement('td');
td.innerHTML = `${studentsList[1].age}`;
tr.appendChild(td);

td = document.createElement('td');
td.innerHTML = studentsList[1].location;
tr.appendChild(td);

table.appendChild(tr);

const body = document.getElementsByTagName('body');

body.item(0).append(table);