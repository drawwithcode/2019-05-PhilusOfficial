var capture;
var male;
var female;
var emptyMale;
var emptyFemale;

function preload() {
  male = loadImage("./assets/male.png");
  female = loadImage("./assets/female.png");
  emptyMale = loadImage("./assets/emptyMale.png");
  emptyFemale = loadImage("./assets/emptyFemale.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

}

function draw() {
  background('black');
  textAlign(CENTER);
  push();

  var vol = mic.getLevel();
  rectMode(CORNERS);
  if (vol < 1.01) {
    rect(width / 2 - 30, height - 250, width / 2 + 30, height - 250 - 250 * vol);
  }

  push();
  noFill();
  stroke('white');
  strokeWeight(10);

  rect(width / 2 - 30, height - 250, width / 2 + 30, height - 500);
  pop();

  imageMode(CENTER);
  if (mouseX < width / 2) {
    image(capture, width / 4, height / 2 - 200, 400, 300)
  } else {
    image(capture, width / 4 * 3, height / 2 - 200, 400, 300)
  }

  if (mouseX < width / 2) {
    imageMode(CENTER);
    image(emptyMale, width / 4, height / 2, 600, 1000);
    image(male, 1, 1, 1, 1);
    image(female, width / 4 * 3, height / 2, 336, 700);
  }

  if (mouseX > width / 2) {
    imageMode(CENTER);
    image(emptyFemale, width / 4 * 3, height / 2, 600, 1000);
    image(male, width / 4, height / 2, 336, 700);
    image(female, 1, 1, 1, 1);
  }

  fill('white');
  textSize(32);
  text('Move your mouse to choose your mii', width / 2, 200, );
  textSize(20);
  text('Talk to the computer to show your appreciation', width / 2, height - 200, );
  pop();
}
