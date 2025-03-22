/* eslint-disable @typescript-eslint/no-unused-expressions */
function n(e) {
  this.init(e || {});
}

n.prototype = {
  init: function (e) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  },
  update: function () {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  },
  value: function () {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  },
};

function Line(e) {
  this.init(e || {});
}

Line.prototype = {
  init: function (e) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    
    if (!pos.x || !pos.y) {
      pos.x = window.innerWidth / 2;
      pos.y = window.innerHeight / 2;
    }

    for (let n = 0; n < E.size; n++) {
      const t = new Node();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  },
  update: function () {
    let e = this.spring;
    let t = this.nodes[0];
    
    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;

    for (let i = 1; i < this.nodes.length; i++) {
      let n = this.nodes[i - 1];
      let t = this.nodes[i];

      t.vx += (n.x - t.x) * e;
      t.vy += (n.y - t.y) * e;
      t.vx += n.vx * E.dampening;
      t.vy += n.vy * E.dampening;
      
      t.vx *= this.friction;
      t.vy *= this.friction;
      t.x += t.vx;
      t.y += t.vy;
      e *= E.tension;
    }
  },
  draw: function () {
    let e, t, n = this.nodes[0].x, i = this.nodes[0].y;
    
    ctx.beginPath();
    ctx.moveTo(n, i);
    
    for (let a = 1; a < this.nodes.length - 1; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    
    e = this.nodes[this.nodes.length - 2];
    t = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    
    ctx.stroke();
    ctx.closePath();
  },
};

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `hsla(${Math.round(f.update())},90%,50%,0.25)`;
    ctx.lineWidth = 1;
    
    for (let t = 0; t < E.trails; t++) {
      lines[t].update();
      lines[t].draw();
    }

    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

let ctx, f, pos = { x: 0, y: 0 }, lines = [];

const E = {
  debug: true,
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

function Node() {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

export const renderCanvas = function () {
  ctx = document.getElementById('canvas').getContext('2d');
  ctx.running = true;
  ctx.frame = 1;
  
  f = new n({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  document.addEventListener('mousemove', (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
  });

  document.addEventListener('touchstart', (e) => {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  });

  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);

  window.addEventListener('focus', () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });

  window.addEventListener('blur', () => {
    ctx.running = false;
  });

  resizeCanvas();
  render();
};
