var diam1=0;

function setup() {
    createCanvas(1200,1200);
    background("#003366");
}
	
function draw() {
    
	fill("#8033FF");
    stroke("#ff3333");
    strokeWeight(5);
    ellipse(diam1,diam1,20,20);
    fill("#334FFF");
    ellipse(random(width),random(height),30,30);
    textSize(20);
    textFont("Arial");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("Hey, it's your friendly neighborhood spiderman!",width/2,100);
}

function mousePressed(){
    if(diam1>50){
       diam1=0;
    }else{
    diam1=diam1+5;
    }
}
	