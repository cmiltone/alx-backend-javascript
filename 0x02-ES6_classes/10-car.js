/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(val) {
    // if (typeof val !== 'string') throw new TypeError('Brand must be a string');
    this._brand = val;
  }

  set motor(val) {
    // if (typeof val !== 'string') throw new TypeError('Motor must be a string');
    this._motor = val;
  }

  set color(val) {
    // if (typeof val !== 'string') throw new TypeError('Color must be a string');
    this._color = val;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Clone = this.constructor[Symbol.species];

    return new Clone();
  }
}
