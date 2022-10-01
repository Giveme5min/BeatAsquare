
var screen;
const Mode = { PERLIN_V: 0, PERLIN_G: 1, METABALLS: 2 };





function setup() {
  createCanvas(windowWidth,windowHeight);
 
  colorMode(HSB,255);
screen =new RecScreen(width,height);
  

}

function draw() {
  background(51);
  
 screen.updateScreen();
  screen.drawScreen();
 
  

}



function mousePressed() {
  if (screen.over) {
    screen.move = true;
    let rand=0;
    switch (rand) {
      case 0:
        screen.metaBalls=true;
        break;
      case 1:
      //  console.log( 'В точку!' );
        break;
      case 2:
      //  console.log( 'Перебор' );
        break;
      default:
    }
      

    screen.color_1=random(2);
  }
}

function mouseReleased() {
  screen.move=false;
  
  
  
}
