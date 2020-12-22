function Extra(){
  this.create = function(){
    rectMode(CENTER)
    noFill()
    strokeWeight(1)
    rect(70, 50, 100, 50)
    fill('black')
    text('Restart', 40, 55)
  }
  this.points = function(){
    fill('black')
    textSize(20)
    text(xPoints + ' : ' + oPoints, 270, 55)
  }
}
