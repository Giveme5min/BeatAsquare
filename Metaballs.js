
//var blobs = []

class Metaball{




    constructor(width,height)
    {
      this.width=width;
      this.height=height;
     // this.blobs = [];
      //for (let i = 0; i < 10; i++)
      this.blobs=new Blobs(random(0, this.width), random(0, this.height));

 
    }

    drawMode() {
      loadPixels();
      for (x = 0; x < this.width; x++) {
        for (y = 0; y < this.height; y++) {
          let sum = 0;
          for (i = 0; i < this.blobs.length; i++) {
            let xdif = x - this.blobs[i].x;
            let ydif = y - this.blobs[i].y;
            let d = sqrt((xdif * xdif) + (ydif * ydif));
            sum += 10 * this.blobs[i].r / d;
          }
          set(x, y, color(sum%255, 255, 255));
        }
      }
      updatePixels();
          
        for (let i = 0; i < this.blobs.length; i++) {
          this.blobs[i].update();
        }
      }



  }


   
  class Blobs  {
 
    constructor(x, y) {
        
      this.x = x;
      this.y = y;
      let angle = random(0, 2 * PI);
      this.xspeed = random(2, 5) * Math.cos(angle);
      this.yspeed = random(2, 5) * Math.sin(angle);
      this.r = random(120, 240);
      
    }
 
    update() {
      this.x += this.xspeed;
      this.y += this.yspeed;
      if (this.x > width || this.x < 0) this.xspeed *= -1;
      if (this.y > height || this.y < 0) this.yspeed *= -1;
    }
  

  }