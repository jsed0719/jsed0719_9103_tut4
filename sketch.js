let yellowColor, orangeColor, bridgeColor, redColor, lightBlueColor, darkBlueColor, blueColor, lakeColor, greenColor, darkGreenColor;
function setup() {
  createCanvas(646, 800);
  // initial the colors
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
}
function draw() {
  background(240);
  drawLake();
  drawLand();
  drawSky();
  drawBridge();
  drawBodyshape();
}
function drawLake() {
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


  fill(yellowColor);
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
  //New Brush Stroke
  noStroke();
  fill(lightBlueColor);
  rect(0, 0, 800, 200);


  fill(redColor);
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(150, 0);
  curveVertex(200, 10);
  curveVertex(320, 0);
  curveVertex(446, 0);
  curveVertex(500, 0);
  curveVertex(400, 25);
  curveVertex(320, 15);
  curveVertex(200, 40);
  curveVertex(20, 15);
  curveVertex(0, 25);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);


  fill(orangeColor);
  beginShape();
  curveVertex(0, 25);
  curveVertex(0, 25);
  curveVertex(40, 18);
  curveVertex(100, 24);
  curveVertex(200, 39);
  curveVertex(320, 10);
  curveVertex(400, 25);
  curveVertex(500, 0);
  curveVertex(750, 0);
  curveVertex(500, 48);
  curveVertex(0, 36);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);


  fill(redColor);
  beginShape();
  curveVertex(0, 45);
  curveVertex(0, 45);
  curveVertex(40, 35);
  curveVertex(160, 54);
  curveVertex(328, 46);
  curveVertex(500, 23);
  curveVertex(600, 33);
  curveVertex(800, 22);
  curveVertex(800, 63);
  curveVertex(500, 53);
  curveVertex(300, 63);
  curveVertex(0, 70);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);


  //New Brush Stroke
  fill(orangeColor);
  beginShape();
  curveVertex(0, 70);
  curveVertex(0, 70);
  curveVertex(50, 55);
  curveVertex(100, 64);
  curveVertex(40, 92);
  curveVertex(300, 63);
  curveVertex(600, 47);
  curveVertex(800, 80);
  curveVertex(800, 120);
  curveVertex(500, 78);
  curveVertex(300, 73);
  curveVertex(0, 120);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);


  //New Brush Stroke
  fill(redColor);
  beginShape();
  curveVertex(0, 120);
  curveVertex(0, 120);
  curveVertex(100, 110);
  curveVertex(380, 67);
  curveVertex(800, 120);
  curveVertex(800, 160);
  curveVertex(400, 130);
  curveVertex(200, 170);
  curveVertex(0, 160);
  curveVertex(0, 140);
  curveVertex(0, 140);
  endShape(CLOSE);


  //New Brush Stroke
  fill(orangeColor);
  beginShape();
  curveVertex(90, 140);
  curveVertex(90, 140);
  curveVertex(200, 120);
  curveVertex(300, 120);
  curveVertex(180, 150);
  curveVertex(90, 140);
  curveVertex(90, 140);
  endShape(CLOSE);


  //New Brush Stroke
  beginShape();
  curveVertex(0, 160);
  curveVertex(0, 160);
  curveVertex(200, 170);
  curveVertex(450, 117);
  curveVertex(800, 180);
  curveVertex(800, 220);
  curveVertex(400, 200);
  curveVertex(0, 190);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);


  //New Brush Stroke
  fill(yellowColor);
  beginShape();
  curveVertex(30, 90);
  curveVertex(30, 90);
  curveVertex(100, 60);
  curveVertex(700, 80);
  curveVertex(500, 50);
  curveVertex(90, 90);
  endShape(CLOSE);


  //New Brush Stroke
  beginShape();
  curveVertex(0, 190);
  curveVertex(0, 190);
  curveVertex(800, 200);
  curveVertex(800, 220);
  curveVertex(700, 200);
  curveVertex(470, 230);
  curveVertex(200, 210);
  curveVertex(100, 240);
  curveVertex(0, 210);
  curveVertex(0, 210);
  endShape(CLOSE);


  // NewBrush Stroke
  fill(redColor);
  beginShape();
  curveVertex(0, 180);
  curveVertex(0, 180);
  curveVertex(150, 190);
  curveVertex(350, 170);
  curveVertex(600, 190);
  curveVertex(800, 160);
  curveVertex(800, 200);
  curveVertex(590, 210);
  curveVertex(320, 200);
  curveVertex(0, 190);
  curveVertex(0, 0);
  curveVertex(0, 0);
  endShape(CLOSE);
}


//BRIDGE DRAWING
function drawBridge() {
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


  fill(redColor);
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


  stroke(orangeColor);
  //draw body outline:
  fill(blueColor);
  beginShape();
  //head
  curveVertex(288, 360); //10
  curveVertex(288, 360); //10
  curveVertex(240, 375); //11
  curveVertex(230, 420); //12
  curveVertex(252, 486); //13.5
  //shoulder
  curveVertex(216, 522); //14.5
  curveVertex(198, 576); //16
  //middle arm to elbow
  curveVertex(176, 648); //18
  curveVertex(198, 666); //18.5


  //curved hips left
  curveVertex(180, 720); //20
  curveVertex(212, 785); //22


  //bottom
  curveVertex(324, 785); //22




  //curved hips right
  curveVertex(295, 720); //20
  curveVertex(313, 648); //18




  //elbow to middle arm
  curveVertex(331, 658); //18.3
  curveVertex(352, 648); //18




  //middle arm to shoulder
  curveVertex(360, 612); //17
  curveVertex(346, 522); //14.5


  //hand bump/shoulder
  curveVertex(342, 504); //14
  curveVertex(330, 486); //13.5
  //head
  curveVertex(352, 414); //11.5
  curveVertex(335, 375); //11


  curveVertex(288, 360); //10
  curveVertex(288, 360); //10
  endShape();




  //draw right arm outline
  fill(bridgeColor);
  beginShape();
  curveVertex(226, 525); //14.6
  curveVertex(226, 525); //14.6
  curveVertex(208, 576); //16
  curveVertex(205, 594); //16.5
  curveVertex(205, 594); //17.7
  curveVertex(198, 648); //18
  curveVertex(216, 630); //17.5
  curveVertex(223, 612); //17
  curveVertex(223, 576); //16
  curveVertex(226, 540); //15
  curveVertex(226, 525); //14.6
  curveVertex(226, 525); //14.6
  endShape();


  //draw left arm outline
  beginShape();
  curveVertex(349, 561); //15.6
  curveVertex(349, 561); //15.6
  curveVertex(338, 561); //15.6
  curveVertex(334, 612); //17
  curveVertex(324, 645); //18
  curveVertex(338, 648); //18.2
  curveVertex(356, 612); //17
  curveVertex(352, 576); //16
  curveVertex(349, 561); //15.6
  curveVertex(349, 561); //15.6
  endShape();


  //draw left hand outline below shoulders
  beginShape();
  curveVertex(250, 375); //10.3
  curveVertex(250, 375); //10.3
  curveVertex(240, 400); //12.5
  curveVertex(265, 486); //13.5
  curveVertex(250, 522); //14.5
  curveVertex(244, 545); //15.5
  curveVertex(273, 486); //13.5
  curveVertex(250, 400); //12.5
  curveVertex(250, 375); //10.3
  curveVertex(250, 375); //10.3
  endShape();


  //draw right hand outline below shoulders
  beginShape();
  curveVertex(330, 380); //10.3
  curveVertex(330, 380); //10.3
  curveVertex(345, 425); //12.5
  curveVertex(320, 486); //13.5
  curveVertex(340, 522); //14.5
  curveVertex(335, 550); //14.5
  curveVertex(310, 490); //14.5
  curveVertex(330, 430); //14.5
  curveVertex(330, 380); //10.3
  curveVertex(330, 380); //10.3
  endShape();




  //draw left shadow bottom
  beginShape();
  curveVertex(280, 622); //17.3
  curveVertex(280, 622); //17.3
  curveVertex(255, 684); //19
  curveVertex(248, 720); //20
  curveVertex(248, 756); //21
  curveVertex(259, 785); //22
  curveVertex(269, 785); //22
  curveVertex(255, 756); //21
  curveVertex(259, 720); //20
  curveVertex(262, 684); //19
  curveVertex(290, 622); //17.3
  curveVertex(280, 622); //17.3
  curveVertex(280, 622); //17.3
  endShape();




  //draw right shadow bottom
  beginShape();
  curveVertex(237, 648); //18
  curveVertex(237, 648); //18
  curveVertex(223, 684); //19
  curveVertex(212, 720); //20
  curveVertex(219, 756); //21
  curveVertex(234, 785); //22
  curveVertex(244, 785); //22
  curveVertex(226, 756); //21
  curveVertex(223, 720); //20
  curveVertex(230, 684); //19
  curveVertex(247, 648); //18
  curveVertex(237, 648); //18
  curveVertex(237, 648); //18
  endShape();




  //face outline
  noStroke();
  fill(greenColor);
  beginShape();
  curveVertex(288, 390); //11
  curveVertex(288, 390); //11
  curveVertex(260, 403); //11.2
  curveVertex(270, 440); //12
  curveVertex(280, 470); //13
  curveVertex(290, 496); //13.8
  curveVertex(305, 486); //13.5
  curveVertex(316, 439); //12.2
  curveVertex(326, 405); //11.5
  curveVertex(288, 390); //11
  curveVertex(288, 390); //11
  endShape();




  //eyes and mouth
  fill(lightBlueColor);
  circle(275, 415, 20);
  circle(310, 415, 20);
  ellipse(295, 460, 15, 30);


  //people in the far top left
  fill(darkBlueColor);
  beginShape();
  curveVertex(43, 375); //8.5
  curveVertex(43, 375); //8.5


  curveVertex(39, 298); //8.3
  curveVertex(32, 295); //8.2
  curveVertex(28, 288); //8
  curveVertex(25, 288); //8
  curveVertex(21, 306); //8.5
  curveVertex(8, 324); //9
  curveVertex(11, 342); //9.5
  curveVertex(14, 360); //10
  curveVertex(14, 378); //10.5
  curveVertex(25, 381); //10.6
  curveVertex(57, 381); //10.6
  curveVertex(64, 385); //10.7
  curveVertex(68, 360); //10
  curveVertex(64, 324); //9
  curveVertex(61, 302); //8.4
  curveVertex(54, 302); //8.4
  curveVertex(54, 298); //8.3
  curveVertex(64, 298); //8.3
  curveVertex(36, 284); //7.9
  curveVertex(43, 295); //8.2
  curveVertex(43, 295); //8.2
  curveVertex(50, 298); //8.3


  curveVertex(48, 375); //8.5
  curveVertex(43, 375); //8.5
  curveVertex(43, 375); //8.5
  endShape()
}
