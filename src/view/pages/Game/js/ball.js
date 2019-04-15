import utils from './utils'

let height = 500
let width = 500
let gravity = 10

let friction = 0.89

function handleCurveCollision(ball, curve) {
  // console.log(curve)
  var curveLayer = curve.getLayer()
  var x = ball.x()
  var y = ball.y()

  var curveDamper = 0.05
  // 5% energy loss
  if (curveLayer.getIntersection({x: x, y: y})) {
    var normal = getNormal(curve, ball)
    if (normal !== null) {
      var angleToNormal = angleBetween(normal, invert(ball.velocity))
      var crossProduct = cross(normal, ball.velocity)
      var polarity = crossProduct.z > 0 ? 1 : -1
      var collisonAngle = polarity * angleToNormal * 2
      var collisionVector = rotate(ball.velocity, collisonAngle)

      ball.velocity.x = collisionVector.x
      ball.velocity.y = collisionVector.y
      ball.velocity.x *= 1 - curveDamper
      ball.velocity.y *= 1 - curveDamper

      x += normal.x
      if (ball.velocity.y > 0.1) {
        y += normal.y
      } else {
        y += normal.y / 10
      }
      ball.x(x).y(y)
    }

    // tween.finish()
  }
}

function update(ball, frame, group) {
  // group.angularVelocity = ((group.rotation() - group.lastRotation) * 1000) / frame.timeDiff
  // group.rotate((frame.timeDiff * group.angularVelocity) / 1000)
  // group.lastRotation = group.rotation()

  if (ball.y() + ball.radius > height) {
    ball.dy = -ball.dy * friction
  } else {
    ball.dy += gravity
  }
  if (ball.x() + ball.radius > width || ball.x() - ball.radius <= 0) {
    ball.dx = -ball.dx
  }
  ball.x(ball.x() + ball.dx)
  ball.y(ball.y() + ball.dy)
// ball.draw()
}

function update1(ball, frame, wheel) {
  let timeDiff = frame.timeDiff
  let stage = ball.getStage()
  let height = stage.height()
  let width = stage.width()
  let x = ball.x()
  let y = ball.y()
  let radius = ball.radius
  // physics variables
  // px / second^2
  let speedIncrementFromGravityEachFrame = (gravity * timeDiff) / 1000
  let collisionDamper = 0.2
  // 20% energy loss
  let floorFriction = 5
  // px / second^2
  let floorFrictionSpeedReduction = (floorFriction * timeDiff) / 1000

  // gravity
  ball.velocity.y += speedIncrementFromGravityEachFrame
  x += ball.velocity.x
  y += ball.velocity.y

  // ceiling condition
  if (y < radius) {
    y = radius
    ball.velocity.y *= -1
    ball.velocity.y *= 1 - collisionDamper
  }

  // floor condition
  if (y > height - radius) {
    y = height - radius
    ball.velocity.y *= -1
    ball.velocity.y *= 1 - collisionDamper
  }

  // floor friction
  if (y === height - radius) {
    if (ball.velocity.x > 0.1) {
      ball.velocity.y -= floorFrictionSpeedReduction
    } else if (ball.velocity.x < -0.1) {
      ball.velocity.x += floorFrictionSpeedReduction
    } else {
      ball.velocity.x = 0
    }
  }

  // right wall condition
  if (x > width - radius) {
    x = width - radius
    ball.velocity.x *= -1
    ball.velocity.x *= 1 - collisionDamper
  }

  // left wall condition
  if (x < radius) {
    x = radius
    ball.velocity.x *= -1
    ball.velocity.x *= 1 - collisionDamper
  }

  ball.position({x: x, y: y})
  handleCurveCollision(ball, wheel)
}

// function test(ball) {
//   if (ball.y() + ball.radius > height) {
//     ball.dy = -ball.dy * friction
//   } else {
//     ball.dy += gravity
//   }
//   if (ball.x() + ball.radius > width || ball.x() - ball.radius <= 0) {
//     ball.dx = -ball.dx
//   }
//   ball.x(ball.x() + ball.dx)
//   ball.y(ball.y() + ball.dy)
// }

function init(ball) {
  let radius = 60
  ball.x(utils.randomIntFromRange(1, width - radius))
  // ball.offsetX = utils.randomIntFromRange(1, 20)
  ball.y(utils.randomIntFromRange(1, height - radius))
  ball.dx = utils.randomIntFromRange(-2, 2)
  ball.dy = utils.randomIntFromRange(-2, 2)
  ball.radius = radius
  ball.velocity = {
    x: 0,
    y: 0
  }
}

function draw(id) {
  let imageObj = new Image(50, 50)
  imageObj.src = '/static/asset/' + id + '.png'
  return {
    image: imageObj
  }
}

/*
*
*
Vector
math
functions
*/
function dot(a, b) {
  return a.x * b.x + a.y * b.y
}

function magnitude(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y)
}

function normalize(a) {
  var mag = magnitude(a)

  if (mag === 0) {
    return {
      x: 0,
      y: 0
    }
  } else {
    return {
      x: a.x / mag,
      y: a.y / mag
    }
  }
}

function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  }
}

function angleBetween(a, b) {
  return Math.acos(dot(a, b) / (magnitude(a) * magnitude(b)))
}

function rotate(a, angle) {
  var ca = Math.cos(angle)
  var sa = Math.sin(angle)
  var rx = a.x * ca - a.y * sa
  var ry = a.x * sa + a.y * ca
  return {
    x: rx * -1,
    y: ry * -1
  }
}

function invert(a) {
  return {
    x: a.x * -1,
    y: a.y * -1
  }
}

/*
 * this cross product function has been simplified by
 * setting x and y to zero because vectors a and b
 * lie in the canvas plane
 */
function cross(a, b) {
  return {
    x: 0,
    y: 0,
    z: a.x * b.y - b.x * a.y
  }
}

function getNormal(curve, ball) {
  var curveLayer = curve.getLayer()
  var context = curveLayer.getContext()
  var testRadius = 20
  // pixels
  var totalX = 0
  var totalY = 0
  var x = ball.x()
  var y = ball.y()
  /*
   * check various points around the center point
   * to determine the normal vector
   */
  for (var n = 0; n < 20; n++) {
    var angle = (n * 2 * Math.PI) / 20
    var offsetX = testRadius * Math.cos(angle)
    var offsetY = testRadius * Math.sin(angle)
    var testX = x + offsetX
    var testY = y + offsetY
    if (!context._context.isPointInPath(testX, testY)) {
      totalX += offsetX
      totalY += offsetY
    }
  }

  var normal

  if (totalX === 0 && totalY === 0) {
    normal = {
      x: 0,
      y: -1
    }
  } else {
    normal = {
      x: totalX,
      y: totalY
    }
  }

  return normalize(normal)
}

export default {draw, add, init, update}
