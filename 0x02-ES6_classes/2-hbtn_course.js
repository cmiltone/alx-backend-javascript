/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') this._name = val;
    else throw new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val === 'number') this._length = val;
    else throw new TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) throw new TypeError('Students must be an array of strings');
    else if (!val.every((item) => typeof item === 'string')) throw new TypeError('Students must be an array of strings');
    else this._students = val;
  }
}
