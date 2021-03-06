let vector = {
  _x: 0,
  _y: 0,
  create: function (x, y) {
    let obj = Object.create(this)
    obj.setX(x)
    obj.setY(y)
    return obj
  },
  setX: function (value) {
    this._x = value
  },
  getX: function () {
    return this._x
  },
  setY: function (value) {
    this._y = value
  },
  getY: function () {
    return this._y
  },
  setAngle: function (angle) {
    let length = this.getLength()
    this._x = Math.cos(angle) * length
    this._y = Math.sin(angle) * length
  },
  getAngle: function () {
    return Math.atan2(this._y, this._x)
  },
  setLength: function (length) {
    let angle = this.getAngle()
    this._x = Math.cos(angle) * length
    this._y = Math.sin(angle) * length
  },
  getLength: function () {
    return Math.sqrt(this._x * this._x + this._y * this._y)
  },
  getPosition: function () {
    return {x: this.getX(), y: this.getY()}
  },
  log: function () {
    console.log(this.getPosition())
  },
  add: function (v2) {
    return vector.create(this._x + v2.getX(), this._y + v2.getY())
  },
  subtract: function (v2) {
    return vector.create(this._x - v2.getX(), this._y - v2.getY())
  },
  multiply: function (v2) {
    return vector.create(this._x * v2.getX(), this._y * v2.getY())
  },
  divide: function (v2) {
    return vector.create(this._x / v2.getX(), this._y / v2.getY())
  },
  addTo: function (v2) {
    this._x += v2.getX()
    this._y += v2.getY()
  },
  subtractFrom: function (v2) {
    this._x -= v2.getX()
    this._y -= v2.getY()
  },
  addScalar: function (scalar) {
    this._x += scalar
    this._y += scalar
  },
  multiplyBy: function (v2) {
    this._x *= v2
    this._y *= v2
  },
  divideBy: function (v2) {
    this._x /= v2
    this._y /= v2
  }
}
export default {vector}
