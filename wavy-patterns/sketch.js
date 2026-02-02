let myShader;
let functionType = 0;
let speedup = 1.0;

function preload() {
  myShader = loadShader('example.vert', 'example.frag')
}

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('canvas-container')
  shader(myShader);
  noStroke();
}

function draw() {
  myShader.setUniform("mouse_press", mouseIsPressed);
  myShader.setUniform("u_resolution", [width, height]);
  myShader.setUniform("u_mouse", [mouseX, height - mouseY]);
  myShader.setUniform("u_time", millis() / 1000.0 * speedup);
  myShader.setUniform("u_functionType", functionType);
  rect(0, 0, width, height);
}

function keyPressed() {
  if (key === 'q') functionType = 0;
  if (key === 'w') functionType = 1;
  if (key === 'e') functionType = 2;
  if (key === 'r') functionType = 3;
  if (key === 't') functionType = 4;
  if (key === '0') speedup = 0.0;
  if (key === '1') speedup = 1.0;
  if (key === '2') speedup = 2.0;
  if (key === '3') speedup = 0.5;
}