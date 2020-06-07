let win = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  width = win.innerWidth || e.clientWidth || g.clientWidth,
  height = win.innerHeight || e.clientHeight || g.clientHeight;

let physicalObjects = [];

let canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width = width;
canvas.height = height;

document.body.appendChild(canvas);

let context = canvas.getContext('2d');

frameRender = function () {
  context.clearRect(0, 0, width, height);

  for (let i = 0; i < physicalObjects.length; i++) {

    context.fillRect(
      physicalObjects[i].x,
      physicalObjects[i].y,
      physicalObjects[i].width,
      physicalObjects[i].height,

    );

    physicalObjects[i].nextFrame();
  }
}

frameRenderLoop = function () {
  requestAnimationFrame(frameRenderLoop);

  frameRender();
}

frameRenderLoop();

// Add an object into the engine at x: 100, y: 100, with a width and height of 20 pixels.
physicalObjects.push(new PhysicalObject(100, 100, 20, 20));

// Give it a little push!
physicalObjects[0].addXVel(0.1);


