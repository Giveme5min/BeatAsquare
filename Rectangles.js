
let springHeight = 32,
maxHeight = 100,
minHeight = 50;

let M = 0.8,  // Mass
K = 0.2,  // Spring constant
D = 0.92, // Damping
R = 50;  // Rest position

var metab;


class RecScreen{
constructor(width,height)
{
  this.left = width / 3 - 100;
  this.right = width / 3 + 100;
  this.height=height;
  this.width=width;

    this.over = false;
    this.move = false;


    this.ps = R,   // Position
    this.vs = 0.0, // Velocity
    this.as = 0,   // Acceleration
    this.f = 0;

    this.metaBalls=false;
    metab=new Metaball(300,300);


}


drawScreen() {       
   //fill(this.color_1, 255, 255);   
  // if(this.metaBalls)
 //  metab.drawMode();
   


    let baseWidth = 0.5 * this.ps + -8; 
    rect(this.width/3-baseWidth , 150+this.ps + springHeight, this.width/4 + 2*baseWidth, this.height/2);

  
    if (this.move) {
        fill(255);
      } else {
        fill(200);
      }

     rect(this.left+50, this.ps+150, this.right-150,  springHeight); 
     rect(this.left+50, this.ps+150+this.height/2 , this.right-150, springHeight);
  
   
     
    


  }

updateScreen() {
    // Update the spring position
    if ( !this.move ) {
      this.f = -K * ( this.ps - R ); // f=-ky
      this.as = this.f / M;          // Set the acceleration, f=ma == a=f/m
      this.vs = D * (this.vs + this.as);  // Set the velocity
      this.ps = this.ps + this.vs;        // Updated position
    }
  
    if (abs(this.vs) < 0.1) {
      this.vs = 0.0;
    }

    //rect(this.left,this.right,this.ps,this.ps + springHeight);
  

  // point(this.left, this.ps+150+springHeight);
 //  point(this.left, this.ps+100 + springHeight);
 //  point(this.right+this.width / 4, this.ps+150+springHeight);
 //  point(this.right+this.width / 4, this.ps+100 + springHeight);
//   stroke('purple'); // Change the color
//   strokeWeight(10);

  //rect(this.left,this.ps+100,this.right,this.ps + springHeight);
  if (mouseX > this.left+50 && mouseX < this.right+this.width-150 / 4 && mouseY > this.ps+100+springHeight && mouseY < this.ps+150 + springHeight) { 
    this.over = true;
  }
   else if(mouseX > this.left+50 && mouseX < this.right+this.width-150 / 4 && mouseY > this.ps+100+springHeight+this.height/2  && mouseY < this.height/2 +this.ps+150 + springHeight)
   {
    this.over = true;
   }
  else {
    this.over = false;
  }

  // Set and constrain the position of top bar
  if (this.move) {
    this.ps = mouseY - springHeight / 2;
    this.ps = constrain(this.ps, minHeight, maxHeight);
  }





  
  }

  
  
    
}


    
