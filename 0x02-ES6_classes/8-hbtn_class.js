/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val !== 'number') throw new TypeError('size must be a number');
    else this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val !== 'string') throw new TypeError('Location must be a string');
    else this._location = val;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
