/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (val && typeof val === 'string') this._name = val;
    else throw new TypeError('Name must be a string');
  }

  get length() {
    return this.length;
  }

  set length(val) {
    if (val && typeof val === 'number') this.length = val;
    else throw new TypeError('Lengrh must be a number');
  }

  get students() {
    return this.students;
  }

  set students(val) {
    if (!val || Array.isArray(val)) throw new TypeError('Students must be an array of strings');
    else if (!val || val.every((item) => typeof item === 'string')) throw new TypeError('Students must be an array of strings');
    else this.students = val;
  }
}
