// import utils from './utils'
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

const canvas = document.getElementById('app')
// const canvas = this.$refs.dashboard
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
console.log(innerHeight, innerWidth)
console.log(outerHeight, outerWidth)

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66','#5E5f44']

let gravity = 1
let friction = 0.99

// Event Listeners
addEventListener('mousemove', event => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})
addEventListener('click', function () {
  init()
})

// Objects
function Ball(x, y, dx, dy, radius, color) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.color = color
  this.update = function () {
    if (this.y + this.radius > canvas.height) {
      this.dy = -this.dy * friction
    } else {
      this.dy += gravity
    }
    if (this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx
    }
    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke()
    c.closePath()
  }
}

// Implementation
let balls

function init() {
  balls = []
  for (let i = 0; i < 36; i++) {
    let radius = randomIntFromRange(8, 20)
    let x = randomIntFromRange(radius, canvas.width - radius)
    let y = randomIntFromRange(0, canvas.height - radius)
    let dx = randomIntFromRange(-2, 2)
    let dy = randomIntFromRange(-2, 2)
    let color = randomColor(colors)
    balls.push(new Ball(x, y, dx, dy, radius, color))
  }
  console.log(balls)
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  balls.forEach(ball => {
    ball.update()
  })
}

init()
animate()
