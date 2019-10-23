//create a reference for the images in the whole file

var capture;
var male;
var female;
var emptyMale;
var emptyFemale;

function preload() {
  //load images
  male = loadImage("./assets/male.png");
  female = loadImage("./assets/female.png");
  emptyMale = loadImage("./assets/emptyMale.png");
  emptyFemale = loadImage("./assets/emptyFemale.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //start audio input
  mic = new p5.AudioIn();
  mic.start();

  //start video input
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

}

function draw() {
  background('black');
  textAlign(CENTER);

  //set the video to be on the right or the left, based on your mouse position
  imageMode(CENTER);
  if (mouseX < width / 2) {
    image(capture, width / 4, height / 2 - 200, 400, 300)
  } else {
    image(capture, width / 4 * 3, height / 2 - 200, 400, 300)
  }

  //set which mii has a empty face depending on your mouse position
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


  //create volume bar
  var vol = mic.getLevel();
  rectMode(CORNERS);
  if (vol < 1.01) {
    rect(width / 2 - 30, height - 250, width / 2 + 30, height - 250 - 250 * vol);
  }

  //create a frame for the volume bar
  push();
  noFill();
  stroke('white');
  strokeWeight(10);
  rect(width / 2 - 30, height - 250, width / 2 + 30, height - 500);
  pop();

  //write some text to define what the user can do
  fill('white');
  textSize(32);
  textFont('Baloo Bhai');
  text('Move your mouse to choose your mii', width / 2, 200, );
  textSize(25);
  text('Talk to the computer to show your appreciation', width / 2, height - 200, );
  textAlign(LEFT);
  textFont('Shadows Into Light')
  text('- Epic!', width / 2 + 60, height - 495, );
  text('- Disappointing...', width / 2 + 60, height - 245, );
  pop();
}
