var hr,min,sc;


function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background("silver");
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(-90);

  hr=hour();
  min=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(3);
  line(0,0,100,0);
  

  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(8);
  line(0,0,60,0);
  
  pop();

  push();
  rotate(minAngle);
  stroke("pink");
  strokeWeight(6);
  line(0,0,80,0);
  
  pop();

  noFill();
  stroke("blue")
  arc(0,0,280,280,0,scAngle);
  stroke("yellow")
  arc(0,0,240,240,0,hrAngle);
  stroke("pink")
  arc(0,0,260,260,0,minAngle);

  drawSprites();
}