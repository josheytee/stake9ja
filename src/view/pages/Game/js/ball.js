import utils from './utils'
import v from './vector'

let height = 600
let width = 600
let rad = 300
let area = 2 * Math.PI * rad

function angleTo(ball, b) {
  return Math.atan2(b.y - ball.y, b.x - ball.x)
}

function getSpeed(ball) {
  return Math.sqrt(ball.x() * ball.x() + ball.y() * ball.y())
}

function setSpeed(ball, speed) {
  let heading = getHeading(ball)
  ball.x(Math.cos(heading) * speed)
  ball.y(Math.sin(heading) * speed)
}

function getHeading(ball) {
  return Math.atan2(ball.y(), ball.x())
}

function setHeading(ball, heading) {
  let speed = getSpeed(ball)
  ball.x(Math.cos(heading) * speed)
  ball.y(Math.sin(heading) * speed)
}

function angleTo(ball, p2) {
  return Math.atan2(p2.y - ball.y(), p2.x - ball.x());
}

function accelerate(ball, v) {
  ball.vx += v.getX()
  ball.vy += v.getY()
}

function animate(wheel, frame) {
  // 20% slow down per second
  let angularFriction = 0.5;
  wheel.angularVelocity -= (wheel.angularVelocity * frame.timeDiff * (1 - angularFriction)) / 1000;

  if (wheel.controlled) {
    wheel.angularVelocity = ((wheel.rotation() - wheel.lastRotation) * 1000) / frame.timeDiff;
  } else {
    wheel.rotate((frame.timeDiff * wheel.angularVelocity) / 1000);
  }

  wheel.lastRotation = wheel.rotation();
}

function updateO(ball, group) {
  ball.velocity.addTo(ball.acceleration)
  ball.velocity.addTo(ball.gravity)
  ball.velocity.multiplyBy(ball.friction)

  ball.x(ball.x() + ball.velocity.getX())
  ball.y(ball.y() + ball.velocity.getY())

// right
  if (ball.x() + ball.radius > width) {
    ball.x(width - ball.radius)
    // ball.vx *= -ball.bounce
    ball.velocity.setX(ball.velocity.getX() * -ball.bounce)
  }

// left
  if (ball.x() - ball.radius < 0) {
    ball.x(ball.radius)
    // ball.vx *= -ball.bounce
    ball.velocity.setX(ball.velocity.getX() * -ball.bounce)
  }

// bottom
  if (ball.y() + ball.radius > height) {
    ball.y(height - ball.radius)
    // ball.vy *= -ball.bounce
    ball.velocity.setY(ball.velocity.getY() * -ball.bounce)
  }

  // top
  if (ball.y() - ball.radius < 0) {
    ball.y(ball.radius)
    ball.velocity.setY(ball.velocity.getY() * -ball.bounce)
  }
}

function radius(wheel) {
  let rx = Math.pow(wheel.x(), 2)
  let ry = Math.pow(wheel.y(), 2)
  return 500
  return Math.sqrt(rx + ry)
// r2=x-a2 + y-b2
}

function ymax(group) {
  return Math.sqrt(height / 2 - Math.pow(group.x(), 2))
}

function xmax(group) {
  return Math.sqrt(width / 2 - Math.pow(group.y(), 2))
}


function update(ball, group) {
  // ball.velocity.addTo(ball.acceleration)
  // ball.velocity.addTo(ball.gravity)
  // ball.velocity.multiplyBy(ball.friction)
  //
  // ball.x(ball.x() + ball.velocity.getX())
  // ball.y(ball.y() + ball.velocity.getY())
  // let radius = 5

  ball.x(ball.x() + Math.cos(ball.angle) + radius(group))
  ball.y(ball.y() + Math.sin(ball.angle) + radius(group))
}

function init(ball) {
  ball.x(width / 2)
  ball.y(height / 2)
  ball.speed = 10
  ball.angle = 0
  ball.radius = 55
  ball.bounce = 0.9
  ball.friction = 0.97
  ball.velocity = v.vector.create(0, 0)
  ball.acceleration = v.vector.create(0, 0)
  ball.gravity = v.vector.create(0, 0.1)
  ball.gravity.setLength(1)
}

function preUpdate(ball, group, f) {
  let pi = Math.PI * 2
  let groupAngle = group.angularVelocity
  let calAngle = pi - groupAngle
  let x = ball.x()
  let y = ball.y()
  // console.log(groupAngle)

  // ball.acceleration.setX(x + Math.cos(groupAngle))
  // ball.acceleration.setY(y + Math.sin(groupAngle))
  //
  // ball.acceleration.addScalar(groupAngle)
  //
  // ball.acceleration.setAngle(-groupAngle * ball.gravity.getAngle())
  // console.log(heading, ball.acceleration.getAngle(), ball.gravity.getAngle())
  // let groupAngle = group.rotate(Math.PI)
  // let ballAngle = ball.gravity.getAngle()
  // let heading = groupAngle * ballAngle
  // ball.gravity.setAngle(ballAngle * groupAngle)
  // console.log(groupAngle, ball.gravity.getAngle())
  // ball.direction = group.rotation() % (Math.PI * 2)
  // console.log(ball.direction)
  // ball.vx = Math.cos(ball.direction) * ball.speed
  // ball.vy = Math.sin(ball.direction) * ball.speed
}

function draw(id) {
  let imageObj = new Image(50, 50)
  imageObj.src = '/static/asset/' + id + '.png'
  return {
    image: imageObj
  }
}

export default {init, draw, update, preUpdate, animate, width, height}
