window.onload = function () {
  let canvas = document.getElementById("app"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    p = particle.create(width / 2, height / 2, 10, Math.PI / 6),
    angle = Math.PI / 2,
    gravity = vector.create(0, 0);
  p.radius = 50;
  // p.bounce = -0.8;
  gravity.setLength(2);
  gravity.setAngle(angle);

  // context.rotate(angle);
  update();
  // context.save();
  // context.restore();
  function update() {
    context.clearRect(0, 0, width, height);

    // animation goes here
    p.accelerate(gravity);

    // angle += 5;
    // console.log(angle);

    context.beginPath();
    context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
    // context.fillRect(p.position.getX(), p.position.getY(), p.position.getX() + p.radius, p.position.getY() + p.radius);
    context.fillStyle = '#4649ff';
    context.fill();

    p.update();

    if (p.position.getX() + p.radius > width) {
      p.position.setX(width - p.radius);
      p.velocity.setX(p.velocity.getX() * p.bounce);
    }

    if (p.position.getX() - p.radius < 0) {
      p.position.setX(p.radius);
      p.velocity.setX(p.velocity.getX() * p.bounce);
    }

    if (p.position.getY() + p.radius > height) {
      p.position.setY(height - p.radius);
      p.velocity.setY(p.velocity.getY() * p.bounce);
    }

    if (p.position.getY() - p.radius < 0) {
      p.position.setY(p.radius);
      p.velocity.setY(p.velocity.getY() * p.bounce);
    }

    requestAnimationFrame(update);
  }
};
