
var img;

function preload(){
    img = loadImage("assets/inhaler_0001.png");
}

function setup() {
	createCanvas(600, 500);
}

function draw() {
    background(255);
    image(img, 0, 0);
}

// function drawImage(img) {
//    image(img, 0, 0);
// }