var value = 0;
var sca = 0;
var img2;
var rain = [];
var a = 0.1;
var accelation = 0.002;

function preload(){
  img2=loadImage('./assets/2.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  setShakeThreshold(10);
  //frameRate(12);
}

function draw() {
  value += -1;
  background(174-sca, 214-sca, 241-sca);
  //background(174, 214, 241);
  image(img2,180,150,img2.width/1.5,img2.height/1.5);

  //fill(241, 148, 148);
  fill(255,227,241);
  textSize(35);
  textAlign(CENTER);
  textStyle(BOLD);
  strokeWeight(1);
  stroke(255);
  //textFont('Georgia');
  var t1 = 'SHAKE YOUR MOBILE TO RAIN';
  var t2 = 'AND MAKE THE PLANT GROW!';
  text(t1,windowWidth/2,60);
  text(t2,windowWidth/2,105);

  if(value>1){
   var newrains={
     x:random(180,850),
     y:random(200,230),
     size:random(10,15),
     alp:random(100,255)
   };
   rain.push(newrains);
  }

  for(j=0; j<rain.length; j++){
    var obj=rain[j];
    rains(obj.x,obj.y,obj.size,obj.alp);
    obj.y=obj.y+random(4,8);
  }

  translate(windowWidth/2, height);
  branch(200);

}

function rains(x,y,size,alp){

    fill(255,220,241,alp);
    //fill(250, 128, 114, alp);
    noStroke();
    ellipse(x,y,size);

}

function deviceShaken() {
  value = value + 10;
  sca = sca+0.3;
  if (sca > 100) {
    sca = 100;
  }

  a = a + accelation;
  if(a > 1){
    a = 1;
  }

}

function branch(len){
  stroke(241, 148, 155);
  strokeWeight(3);
	line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 4){
    push();
    rotate(a);
    branch(len*0.7);
    pop();
    push();
    rotate(-a);
    branch(len*0.7);
    pop();
  }
  //line(0, 0, 0, -len*0.7);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
