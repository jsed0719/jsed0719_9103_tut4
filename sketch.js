let yellowColor, orangeColor, bridgeColor, redColor, lightBlueColor, darkBlueColor, blueColor, lakeColor, greenColor, darkGreenColor;
//declare variables for audio 
let thunderAudio
//declar button for play music
let playButton
//preload the audio file
function preload() {
  thunderAudio = loadSound("assets/thunderisland.mp3");
}

function setup() {
  createCanvas(646, 800);
  amplitude = new p5.Amplitude();
  // initial the original colors
  let currentColors = [];
  dayColors = [color(237, 199, 98), color(208, 179, 104), color(194, 158, 106), color(145, 59, 34), color(136, 153, 170), color(42, 47, 78), color(51, 63, 89), color(57, 73, 109), color(81, 103, 82), color(46, 61, 54)];
  for (let i = 0; i < dayColors.length; i++) {
    currentColors.push(dayColors[i]);
  }
  yellowColor = currentColors[0];
  orangeColor = currentColors[1];
  bridgeColor = currentColors[2];
  redColor = currentColors[3];
  lightBlueColor = currentColors[4];
  darkBlueColor = currentColors[5];
  blueColor = currentColors[6];
  lakeColor = currentColors[7];
  greenColor = currentColors[8];
  darkGreenColor = currentColors[9];

  // initial the sky animation colors for audio animation
  thunderBlack = color(0, 0, 0);
  thunderBlue = color(30, 30, 100);
  thunderGray = color(115, 115, 115);
  thunderWhite = color(255, 255, 224);
  thunderOrange = color(255, 165, 0);
  thunderSun = color(255, 219, 0);

  // set up the fft audio analysis
  let fft = new p5.FFT();
  thunderAudio.connect(fft);
  // create play button for audio 
  playButton = createButton('Play Thunder Island');
  playButton.position(20, height - 40);
  playButton.mousePressed(togglePlay);
}
function draw() {
  background(240);
  drawLake();
  drawLand();
  drawBridge();
  drawBodyshape();
  drawSky();
}
// Toggle play function to play song and pause song when button pressed
function togglePlay() {
  if (thunderAudio.isPlaying()) {
    thunderAudio.pause();
    playButton.html('Play Thunder Island');
  } else {
    thunderAudio.play();
    playButton.html('Pause');
  }
}
function drawLake() {
  let ampLevel = amplitude.getLevel();
  let colorChange = constrain(ampLevel * 4, 0, 1);
  let middleLakeColor = lerpColor(yellowColor, thunderOrange, colorChange);

  fill(blueColor);
  rect(0, 200, 646, 600);


  fill(darkBlueColor);
  noStroke();
  beginShape();
  curveVertex(418, 262);
  curveVertex(418, 262);
  curveVertex(582, 291);
  curveVertex(425, 414);
  curveVertex(436, 545);
  curveVertex(371, 414);
  curveVertex(516, 298);
  curveVertex(418, 262);
  curveVertex(418, 262);
  endShape();


  fill(lakeColor);
  beginShape()
  curveVertex(0, 295);
  curveVertex(0, 295);
  curveVertex(127, 251);
  curveVertex(232, 262);
  curveVertex(418, 262);
  curveVertex(465, 293);
  curveVertex(429, 309);
  curveVertex(411, 345);
  curveVertex(254, 371);
  curveVertex(171, 509);
  curveVertex(0, 500);
  curveVertex(0, 295);
  curveVertex(0, 295);
  endShape();


  fill(middleLakeColor);
  beginShape();
  curveVertex(3, 296);
  curveVertex(3, 296);
  curveVertex(145, 283);
  curveVertex(291, 273);
  curveVertex(400, 284);
  curveVertex(433, 275);
  curveVertex(445, 291);
  curveVertex(418, 305);
  curveVertex(349, 291);
  curveVertex(291, 302);
  curveVertex(298, 316);
  curveVertex(382, 327);
  curveVertex(364, 342);
  curveVertex(287, 349);
  curveVertex(222, 364);
  curveVertex(164, 356);
  curveVertex(87, 364);
  curveVertex(3, 364);
  curveVertex(3, 296);
  curveVertex(3, 296);
  endShape();


  fill(lightBlueColor);
  ellipse(170, 320, 180, 70);
  ellipse(393, 290, 32, 10);


  fill(yellowColor);
  ellipse(180, 325, 160, 52);


  fill(lightBlueColor);
  ellipse(180, 320, 72, 22);


}


function drawLand() {

  fill(darkGreenColor);
  beginShape();
  curveVertex(646, 255);
  curveVertex(646, 255);
  curveVertex(582, 331);
  curveVertex(480, 371);
  curveVertex(430, 430);
  curveVertex(444, 538);
  curveVertex(291, 654);
  curveVertex(291, 800);
  curveVertex(646, 800);
  curveVertex(646, 255);
  curveVertex(646, 255);
  endShape();


  fill(greenColor);
  beginShape();
  curveVertex(646, 305);
  curveVertex(646, 305);
  curveVertex(590, 371);
  curveVertex(527, 436);
  curveVertex(545, 578);
  curveVertex(538, 727);
  curveVertex(600, 800);
  curveVertex(646, 800);
  curveVertex(646, 305);
  curveVertex(646, 305);
  endShape();
}


function drawSky() {
  // Get the current amplitude level and amplify its effect by 4 on color change to make change more intense
  // use constrain to keep the color value between 0-1
  let ampLevel = amplitude.getLevel();
  let skyMove = map(ampLevel, 0, 1, 0, 65);
  let colorChange = constrain(ampLevel * 7, 0, 1);
  //Create color change using lerpColor. change from original color to color of choice
  let redChange1 = lerpColor(redColor, thunderGray, colorChange);
  let redChange2 = lerpColor(redColor, thunderWhite, colorChange);
  let orangeChange1 = lerpColor(orangeColor, thunderBlue, colorChange);
  let orangeChange2 = lerpColor(orangeColor, thunderBlack, colorChange);
  let orangeChange3 = lerpColor(orangeColor, thunderWhite, colorChange);
  let yellowChange1 = lerpColor(yellowColor, thunderOrange, colorChange);


  noStroke();
  fill(lightBlueColor);
  rect(0, 0, 800, 200 );

  fill(redColor);
  beginShape();
  curveVertex(0, 0 + skyMove);
  curveVertex(0, 0 - skyMove);
  curveVertex(150, 0 - skyMove);
  curveVertex(200, 10 + skyMove);
  curveVertex(320, 0 - skyMove);
  curveVertex(446, 0 + skyMove);
  curveVertex(500, 0 - skyMove);
  curveVertex(400, 25 + skyMove);
  curveVertex(320, 15 - skyMove);
  curveVertex(200, 40 + skyMove);
  curveVertex(20, 15 - skyMove);
  curveVertex(0, 25 + skyMove);
  curveVertex(0, 0 + skyMove);
  curveVertex(0, 0 + skyMove);
  endShape(CLOSE);


  fill(orangeChange1);
  beginShape();
  curveVertex(0, 25 + skyMove);
  curveVertex(0, 25 - skyMove); 
  curveVertex(40, 18 + skyMove);
  curveVertex(100, 24 - skyMove);
  curveVertex(200, 39 + skyMove);
  curveVertex(320, 10 - skyMove);
  curveVertex(400, 25 + skyMove);
  curveVertex(500, 0 - skyMove);
  curveVertex(750, 0 + skyMove);
  curveVertex(500, 48 - skyMove);
  curveVertex(0, 36 + skyMove);
  curveVertex(0, 0); 
  curveVertex(0, 0); 
  endShape(CLOSE);


  fill(redChange1);
  beginShape();
  curveVertex(0, 45 + skyMove);
  curveVertex(0, 45 - skyMove);
  curveVertex(40, 35 + skyMove);
  curveVertex(160, 54 - skyMove);
  curveVertex(328, 46 + skyMove);
  curveVertex(500, 23 - skyMove);
  curveVertex(600, 33 + skyMove);
  curveVertex(800, 22 - skyMove);
  curveVertex(800, 63 + skyMove);
  curveVertex(500, 53 - skyMove);
  curveVertex(300, 63 + skyMove);
  curveVertex(0, 70 - skyMove);
  curveVertex(0, 45 + skyMove); // Loop back to start to close shape
  curveVertex(0, 45 - skyMove); // Repeat first point to smooth the curve end
  endShape(CLOSE);


  //New Brush Stroke
  fill(orangeChange2);
  beginShape();
  curveVertex(0, 70 + skyMove);
  curveVertex(0, 70 + skyMove); 
  curveVertex(50, 55 + skyMove);
  curveVertex(100, 64 + skyMove);
  curveVertex(150, 92 + skyMove); 
  curveVertex(300, 63 + skyMove);
  curveVertex(600, 47 + skyMove);
  curveVertex(800, 80 + skyMove);
  curveVertex(800, 120); 
  curveVertex(500, 78 + skyMove);
  curveVertex(300, 73 + skyMove);
  curveVertex(0, 120); 
  curveVertex(0, 0);
  curveVertex(0, 0); 
  endShape(CLOSE);


  //New Brush Stroke
  fill(redChange1);
  beginShape();
  curveVertex(0, 120 + skyMove);
  curveVertex(0, 120 + skyMove); 
  curveVertex(100, 110 + skyMove);
  curveVertex(380, 67 + skyMove);
  curveVertex(800, 120 + skyMove);
  curveVertex(800, 160); 
  curveVertex(400, 130 + skyMove);
  curveVertex(200, 170 + skyMove);
  curveVertex(0, 160); 
  curveVertex(0, 140); 
  curveVertex(0, 140); 
  endShape(CLOSE);


  //New Brush Stroke
  fill(orangeChange3);
  beginShape();
  curveVertex(90 + skyMove, 140 + skyMove);
  curveVertex(90 + skyMove, 140 + skyMove); 
  curveVertex(200 + skyMove, 120 + skyMove);
  curveVertex(300 + skyMove, 120 + skyMove);
  curveVertex(180 + skyMove, 150 + skyMove);
  curveVertex(90 + skyMove, 140 + skyMove);
  curveVertex(90 + skyMove, 140 + skyMove); 
  endShape(CLOSE);


  //New Brush Stroke
  fill(orangeChange1);
  beginShape();
  curveVertex(0, 160 + skyMove);
  curveVertex(0, 160 - skyMove); 
  curveVertex(200, 170 + skyMove); 
  curveVertex(450, 117 - skyMove);
  curveVertex(800, 180 + skyMove);
  curveVertex(800, 220 - skyMove); 
  curveVertex(400, 200 + skyMove);
  curveVertex(0, 190 - skyMove);
  curveVertex(0, 160 + skyMove); 
  curveVertex(0, 160 - skyMove); 
  endShape(CLOSE);


  //New Brush Stroke
  fill(yellowChange1); 
  beginShape();
  curveVertex(30, 90);
  curveVertex(30, 90); 
  curveVertex(100, 60 + skyMove); 
  curveVertex(700, 80 + skyMove); 
  curveVertex(500, 50 + skyMove); 
  curveVertex(90, 90 - skyMove); 
  endShape(CLOSE);


  //New Brush Stroke
  fill(yellowChange1);
  beginShape();
  curveVertex(0, 190 + skyMove);
  curveVertex(0, 190 - skyMove);
  curveVertex(800, 200 + skyMove);
  curveVertex(800, 220 - skyMove);
  curveVertex(700, 200 + skyMove);
  curveVertex(470, 230 - skyMove);
  curveVertex(200, 210 + skyMove);
  curveVertex(100, 240 - skyMove);
  curveVertex(0, 210 + skyMove);
  curveVertex(0, 210 + skyMove);
  endShape(CLOSE);


  // NewBrush Stroke
  fill(redChange2);
  beginShape();
  curveVertex(0, 180 + skyMove);
  curveVertex(0, 180 - skyMove);
  curveVertex(150, 190 + skyMove);
  curveVertex(350, 170 - skyMove);
  curveVertex(600, 190 + skyMove);
  curveVertex(800, 160 - skyMove);
  curveVertex(800, 200 + skyMove);
  curveVertex(590, 210 - skyMove);
  curveVertex(320, 200 + skyMove);
  curveVertex(0, 190 - skyMove);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);

}

function drawBridge() {
  let ampLevel = amplitude.getLevel();
  let colorChange = constrain(ampLevel * 10, 0, 1);
  // let colorChange = map(level, 0, 5, 0, 5); // map amplitude level to a range from 0 to 1 for lerpColor
  let bridgeColorchange2 = lerpColor(redColor, thunderWhite, colorChange);

  noStroke();
  // Drawing the main bridge
  fill(bridgeColor);
  beginShape();
  vertex(0, 240);
  vertex(0, 800);
  vertex(436, 800);
  endShape(CLOSE);


  //  handrail of the bridge
  beginShape();
  vertex(0, 220);
  vertex(646, 780);
  vertex(646, 710);
  endShape(CLOSE);


  fill(bridgeColorchange2);
  beginShape();
  vertex(0, 230);
  vertex(520, 800);
  vertex(600, 800);
  endShape(CLOSE);


  // shadow of the people
  beginShape();
  vertex(62, 380);
  vertex(50, 380);
  vertex(200, 660);
  vertex(300, 660);
  endShape(CLOSE);


  beginShape();
  vertex(40, 380);
  vertex(13, 380);
  vertex(30, 740);
  vertex(150, 690);
  endShape(CLOSE);
}


function drawBodyshape() {
  let ampLevel = amplitude.getLevel();
  let bodyMove = map(ampLevel, 0, 1, 0, 140);
  stroke(orangeColor);
  //draw body outline:
  fill(blueColor);
  beginShape();
  //head
  curveVertex(288, 360 + bodyMove); 
  curveVertex(288, 360 + bodyMove); 
  curveVertex(240, 375 + bodyMove); 
  curveVertex(230, 420 + bodyMove); 
  curveVertex(252, 486 + bodyMove); 
  //shoulder
  curveVertex(216, 522 + bodyMove); 
  curveVertex(198, 576 + bodyMove); 
  //middle arm to elbow
  curveVertex(176, 648 + bodyMove); 
  curveVertex(198, 666 + bodyMove); 
  //curved hips left
  curveVertex(180, 720 + bodyMove); 
  curveVertex(212, 785 + bodyMove); 
  //bottom
  curveVertex(324, 785 + bodyMove); 
  //curved hips right
  curveVertex(295, 720 + bodyMove); 
  curveVertex(313, 648 + bodyMove); 
  //elbow to middle arm
  curveVertex(331, 658 + bodyMove); 
  curveVertex(352, 648 + bodyMove); 
  //middle arm to shoulder
  curveVertex(360, 612 + bodyMove); 
  curveVertex(346, 522 + bodyMove); 
  //hand bump/shoulder
  curveVertex(342, 504 + bodyMove); 
  curveVertex(330, 486 + bodyMove); 
  //head
  curveVertex(352, 414 + bodyMove); 
  curveVertex(335, 375 + bodyMove); 
  curveVertex(288, 360 + bodyMove); 
  curveVertex(288, 360 + bodyMove); 
  endShape();
  //draw right arm outline
  fill(bridgeColor);
  beginShape();
  curveVertex(226, 525 + bodyMove); 
  curveVertex(226, 525 + bodyMove); 
  curveVertex(208, 576 + bodyMove); 
  curveVertex(205, 594 + bodyMove); 
  curveVertex(205, 594 + bodyMove); 
  curveVertex(198, 648 + bodyMove); 
  curveVertex(216, 630 + bodyMove); 
  curveVertex(223, 612 + bodyMove); 
  curveVertex(223, 576 + bodyMove); 
  curveVertex(226, 540 + bodyMove); 
  curveVertex(226, 525 + bodyMove); 
  curveVertex(226, 525 + bodyMove); 
  endShape();
  //draw left arm outline
  beginShape();
  curveVertex(349, 561 + bodyMove); 
  curveVertex(349, 561 + bodyMove); 
  curveVertex(338, 561 + bodyMove); 
  curveVertex(334, 612 + bodyMove); 
  curveVertex(324, 645 + bodyMove); 
  curveVertex(338, 648 + bodyMove); 
  curveVertex(356, 612 + bodyMove); 
  curveVertex(352, 576 + bodyMove); 
  curveVertex(349, 561 + bodyMove); 
  curveVertex(349, 561 + bodyMove); 
  endShape();
  //draw left hand outline below shoulders
  beginShape();
  curveVertex(250, 375 + bodyMove); 
  curveVertex(250, 375 + bodyMove); 
  curveVertex(240, 400 + bodyMove); 
  curveVertex(265, 486 + bodyMove); 
  curveVertex(250, 522 + bodyMove); 
  curveVertex(244, 545 + bodyMove); 
  curveVertex(273, 486 + bodyMove); 
  curveVertex(250, 400 + bodyMove); 
  curveVertex(250, 375 + bodyMove); 
  curveVertex(250, 375 + bodyMove); 
  endShape();
  //draw right hand outline below shoulders
  beginShape();
  curveVertex(330, 380 + bodyMove); 
  curveVertex(330, 380 + bodyMove); 
  curveVertex(345, 425 + bodyMove); 
  curveVertex(320, 486 + bodyMove); 
  curveVertex(340, 522 + bodyMove); 
  curveVertex(335, 550 + bodyMove); 
  curveVertex(310, 490 + bodyMove); 
  curveVertex(330, 430 + bodyMove); 
  curveVertex(330, 380 + bodyMove); 
  curveVertex(330, 380 + bodyMove); 
  endShape();
  //draw left shadow bottom
  beginShape();
  curveVertex(280, 622 + bodyMove); 
  curveVertex(280, 622 + bodyMove); 
  curveVertex(255, 684 + bodyMove); 
  curveVertex(248, 720 + bodyMove); 
  curveVertex(248, 756 + bodyMove); 
  curveVertex(259, 785 + bodyMove); 
  curveVertex(269, 785 + bodyMove); 
  curveVertex(255, 756 + bodyMove); 
  curveVertex(259, 720 + bodyMove); 
  curveVertex(262, 684 + bodyMove); 
  curveVertex(290, 622 + bodyMove); 
  curveVertex(280, 622 + bodyMove); 
  curveVertex(280, 622 + bodyMove); 
  endShape();
  //draw right shadow bottom
  beginShape();
  curveVertex(237, 648 + bodyMove); 
  curveVertex(237, 648 + bodyMove); 
  curveVertex(223, 684 + bodyMove); 
  curveVertex(212, 720 + bodyMove); 
  curveVertex(219, 756 + bodyMove); 
  curveVertex(234, 785 + bodyMove); 
  curveVertex(244, 785 + bodyMove); 
  curveVertex(226, 756 + bodyMove); 
  curveVertex(223, 720 + bodyMove); 
  curveVertex(230, 684 + bodyMove); 
  curveVertex(247, 648 + bodyMove); 
  curveVertex(237, 648 + bodyMove); 
  curveVertex(237, 648 + bodyMove); 
  endShape();
  //face outline
  noStroke();
  fill(greenColor);
  beginShape();
  curveVertex(288, 390 + bodyMove); 
  curveVertex(288, 390 + bodyMove); 
  curveVertex(260, 403 + bodyMove); 
  curveVertex(270, 440 + bodyMove); 
  curveVertex(280, 470 + bodyMove); 
  curveVertex(290, 496 + bodyMove); 
  curveVertex(305, 486 + bodyMove); 
  curveVertex(316, 439 + bodyMove); 
  curveVertex(326, 405 + bodyMove); 
  curveVertex(288, 390 + bodyMove); 
  curveVertex(288, 390 + bodyMove); 
  endShape();
  //eyes and mouth
  fill(lightBlueColor);
  circle(275, 415 + bodyMove, 20 );
  circle(310, 415 + bodyMove, 20 );
  ellipse(295, 460 + bodyMove, 15 + bodyMove, 30 + bodyMove);
  //people in the far top left
  fill(darkBlueColor);
  beginShape();
  curveVertex(43, 375); 
  curveVertex(43, 375); 
  curveVertex(39, 298); 
  curveVertex(32, 295); 
  curveVertex(28, 288); 
  curveVertex(25, 288); 
  curveVertex(21, 306); 
  curveVertex(8, 324); 
  curveVertex(11, 342); 
  curveVertex(14, 360); 
  curveVertex(14, 378); 
  curveVertex(25, 381);
  curveVertex(57, 381); 
  curveVertex(64, 385); 
  curveVertex(68, 360); 
  curveVertex(64, 324); 
  curveVertex(61, 302); 
  curveVertex(54, 302); 
  curveVertex(54, 298); 
  curveVertex(64, 298); 
  curveVertex(36, 284); 
  curveVertex(43, 295); 
  curveVertex(43, 295); 
  curveVertex(50, 298); 
  curveVertex(48, 375); 
  curveVertex(43, 375); 
  curveVertex(43, 375); 
  endShape()
}

