//Variables

let x = {
  topLeft: false,
  topMiddle: false,
  topRight: false,
  middleLeft: false,
  middleMiddle: false,
  middleRight: false,
  bottomLeft: false,
  bottomMiddle: false,
  bottomRight: false
}
let o = {
  topLeft: false,
  topMiddle: false,
  topRight: false,
  middleLeft: false,
  middleMiddle: false,
  middleRight: false,
  bottomLeft: false,
  bottomMiddle: false,
  bottomRight: false
}
let win = {
  win: false,
  x: false,
  o: false
}
let turn = {
  x: true,
  o: false
}

var moveCount = 0
var xPoints = 0
var oPoints = 0

//<--------------------------------------------------------------------------->

function setup() {
  createCanvas(400, 475);
  board = new Board()
  check = new Check()
  extra = new Extra()
}

function draw() {
  strokeWeight(1)
  background(220);
  board.create()
  check.check()
  check.win()
  extra.create()
  extra.points()
}

//<--------------------------------------------------------------------------->

function mousePressed() {
  //creates X if O isn't there
  if (mouseX >= 0 && mouseX <= width / 3 && mouseY >= 100 && mouseY <= (height - 100) / 3 + 100 && turn.x == true && win.win == false && o.topLeft == false) {
    x.topLeft = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= 0 && mouseX <= width / 3 && mouseY >= 100 && mouseY <= (height - 100) / 3 + 100 && turn.o == true && win.win == false && x.topLeft == false) {
    o.topLeft = true
    turn.x = true
    turn.o = false
    moveCount++
  }

  if (mouseX >= width / 3 && mouseX <= width / 3 * 2 && mouseY >= 100 && mouseY <= (height - 100) / 3 + 100 && turn.x == true && win.win == false && o.topMiddle == false) {
    x.topMiddle = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= width / 3 && mouseX <= width / 3 * 2 && mouseY >= 0 && mouseY <= (height - 100) / 3 + 100 && turn.o == true && x.topMiddle == false) {
    o.topMiddle = true
    turn.x = true
    turn.o = false
    moveCount++
  }

  if (mouseX >= width / 3 * 2 && mouseX <= width && mouseY >= 100 && mouseY <= (height - 100) / 3 + 100 && turn.x == true && win.win == false && o.topRight == false) {
    x.topRight = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= width / 3 * 2 && mouseX <= width && mouseY >= 100 && mouseY <= (height - 100) / 3 + 100 && turn.o == true && win.win == false && x.topRight == false) {
    o.topRight = true
    turn.x = true
    turn.o = false
    moveCount++
  }

  if (mouseX >= 0 && mouseX <= width / 3 && mouseY >= (height - 100) / 3 + 100 && mouseY <= (height - 100) / 3 * 2 + 100 && turn.x == true && win.win == false && o.middleLeft == false) {
    x.middleLeft = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= 0 && mouseX <= width / 3 && mouseY >= (height - 100) / 3 + 100 && mouseY <= (height - 100) / 3 * 2 + 100 && turn.o == true && win.win == false && x.middleLeft == false) {
    o.middleLeft = true
    turn.x = true
    turn.o = false
    moveCount++
  }

  if (mouseX >= width / 3 && mouseX <= width / 3 * 2 && mouseY >= (height - 100) / 3 + 100 && mouseY <= (height - 100) / 3 * 2 + 100 && turn.x == true && win.win == false && o.middleMiddle == false) {
    x.middleMiddle = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= width / 3 && mouseX <= width / 3 * 2 && mouseY >= (height - 100) / 3 + 100 && mouseY <= (height - 100) / 3 * 2 + 100 && turn.o == true && win.win == false && x.middleMiddle == false) {
    o.middleMiddle = true
    turn.x = true
    turn.o = false
    moveCount++
  }

  if (mouseX >= width / 3 * 2 && mouseX <= width && mouseY >= (height - 100) / 3 + 100 && mouseY <= (height - 100) / 3 * 2 + 100 && turn.x == true && win.win == false && o.middleRight == false) {
    x.middleRight = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= width / 3 * 2 && mouseX <= width && mouseY >= (height - 100) / 3 + 100 && mouseY <= (height - 100) / 3 * 2 + 100 && turn.o == true && win.win == false && x.middleRight == false) {
    o.middleRight = true
    turn.x = true
    turn.o = false
    moveCount++
  }
  if (mouseX >= 0 && mouseX <= width / 3 && mouseY >= (height - 100) / 3 * 2 + 100 && mouseY <= height && turn.x == true && win.win == false && o.bottomLeft == false) {
    x.bottomLeft = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= 0 && mouseX <= width / 3 && mouseY >= (height - 100) / 3 * 2 + 100 && mouseY <= height && turn.o == true && win.win == false && x.bottomLeft == false) {
    o.bottomLeft = true
    turn.x = true
    turn.o = false
    moveCount++
  }
  if (mouseX >= width / 3 && mouseX <= width / 3 * 2 && mouseY >= (height - 100) / 3 * 2 + 100 && mouseY <= height && turn.x == true && win.win == false && o.bottomMiddle == false) {
    x.bottomMiddle = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= width / 3 && mouseX <= width / 3 * 2 && mouseY >= (height - 100) / 3 * 2 + 100 && mouseY <= height && turn.o == true && win.win == false && x.bottomMiddle == false) {
    o.bottomMiddle = true
    turn.x = true
    turn.o = false
    moveCount++
  }
  if (mouseX >= width / 3 * 2 && mouseX <= width && mouseY >= (height - 100) / 3 * 2 + 100 && mouseY <= height && turn.x == true && win.win == false && o.bottomRight == false) {
    x.bottomRight = true
    turn.x = false
    turn.o = true
    moveCount++
  } else if (mouseX >= width / 3 * 2 && mouseX <= width && mouseY >= (height - 100) / 3 * 2 + 100 && mouseY <= height && turn.o == true && win.win == false && x.bottomRight == false) {
    o.bottomRight = true
    turn.x = true
    turn.o = false
    moveCount++
  } else if (mouseX >= 20 && mouseX <= 120 && mouseY >= 25 && mouseY <= 75) {
    x.topLeft = false
    x.topMiddle = false
    x.topRight = false
    x.middleLeft = false
    x.middleMiddle = false
    x.middleRight = false
    x.bottomLeft = false
    x.bottomMiddle = false
    x.bottomRight = false
    o.topLeft = false
    o.topMiddle = false
    o.topRight = false
    o.middleLeft = false
    o.middleMiddle = false
    o.middleRight = false
    o.bottomLeft = false
    o.bottomMiddle = false
    o.bottomRight = false
    turn.x = true
    turn.o = false
    win.win = false
    win.winX = false
    win.winO = false
    moveCount = 0
  }
}
