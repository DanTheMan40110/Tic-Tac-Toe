function Board() {
  this.create = function() {
    for (i = 1; i < 3; i++) {
      line(width / 3 * i, 100, width / 3 * i, height)
    }
    line(0, 100, width, 100)
    for (j = 1; j < 3; j++) {
      line(0, (height - 100) / 3 * j + 100, width, (height - 100) / 3 * j + 100)
    }
  }
  
//<--------------------------------------------------------------------------->
  
  this.x = function(x, y) {
    line(width / 3 * (x - 1), (height - 100) / 3 * (y - 1) + 100, width / 3 * x, (height - 100) / 3 * y + 100)
    line(width / 3 * (x - 1), (height - 100) / 3 * y + 100, width / 3 * x, (height - 100) / 3 * (y - 1) + 100)
  }
  
//<--------------------------------------------------------------------------->
  
  this.o = function(x, y) {
    ellipseMode(CENTER)
    noFill()
    for(k = 0; k < 110; k++){
      fill(220)
      strokeWeight(0)
      rect(width/3 * x - width/ 3 / 2, (height - 100) / 3 * y - height/ 3 / 2 + 115 + 2, 120, 110)
      strokeWeight(1)
      ellipse(width / 3 * x - width / 3 / 2, (height - 100) / 3 * y - height / 3 / 2 + 115, k);
    }
  }
}
