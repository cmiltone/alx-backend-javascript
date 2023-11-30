/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  get year() {
    return this._year;
  }

  set year(val) {
    if (typeof val !== 'number') throw new TypeError('Year must be a number');
    else this._year = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val !== 'string') throw new TypeError('Location must be a string');
    else this._location = val;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    const self = this;
    return `${self.fullName} - ${self.holbertonClass.year} - ${self.holbertonClass.location}`;
  }

  set firstName(val) {
    if (typeof val !== 'string') throw new TypeError('First Name must be a string');
    else this._firstName = val;
  }

  set lastName(val) {
    if (typeof val !== 'string') throw new TypeError('Last Name must be a string');
    else this._lastName = val;
  }

  set holbertonClass(val) {
    if (!(val instanceof HolbertonClass)) throw new TypeError('holbertonClass must be a HolbertonClass');
    else this._holbertonClass = val;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
