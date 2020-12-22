function Check() {
  this.check = function() {
    if (x.topLeft == true) {
      board.x(1, 1)
    }
    if (x.topMiddle == true) {
      board.x(2, 1)
    }
    if (x.topRight == true) {
      board.x(3, 1)
    }
    if (x.middleLeft == true) {
      board.x(1, 2)
    }
    if (x.middleMiddle == true) {
      board.x(2, 2)
    }
    if (x.middleRight == true) {
      board.x(3, 2)
    }
    if (x.bottomLeft == true) {
      board.x(1, 3)
    }
    if (x.bottomMiddle == true) {
      board.x(2, 3)
    }
    if (x.bottomRight == true) {
      board.x(3, 3)
    }
    
//<--------------------------------------------------------------------------->
    
    if (o.topLeft == true) {
      board.o(1, 1)
    }
    if (o.topMiddle == true) {
      board.o(2, 1)
    }
    if (o.topRight == true) {
      board.o(3, 1)
    }
    if (o.middleLeft == true) {
      board.o(1, 2)
    }
    if (o.middleMiddle == true) {
      board.o(2, 2)
    }
    if (o.middleRight == true) {
      board.o(3, 2)
    }
    if (o.bottomLeft == true) {
      board.o(1, 3)
    }
    if (o.bottomMiddle == true) {
      board.o(2, 3)
    }
    if (o.bottomRight == true) {
      board.o(3, 3)
    }
  }
  
//<--------------------------------------------------------------------------->
  
  this.win = function() {
    if(x.topLeft == true && x.topMiddle == true && x.topRight == true && win.win == false){
      win.win = true
      win.x = true
    }else if(x.middleLeft == true && x.middleMiddle == true && x.middleRight == true && win == false){
      win.win = true
      win.x = true
    }else if(x.bottomLeft == true && x.bottomMiddle == true && x.bottomRight == true && win.win == false){
      win.win = true
      win.x = true
    }else if(x.topLeft == true && x.middleLeft == true && x.bottomLeft == true && win.win == false){
      win.win = true
      win.x = true
    }else if(x.topMiddle == true && x.middleMiddle == true && x.bottomMiddle == true && win.win == false){
      win.win = true
      win.x = true
    }else if(x.topRight == true && x.middleRight == true && x.bottomRight == true && win.win == false){
      win.win = true
      win.x = true
    }else if(x.topLeft == true && x.middleMiddle == true && x.bottomRight == true && win.win == false){
      win.win = true
      win.x = true
    }else if(x.topRight == true && x.middleMiddle == true && x.bottomLeft == true && win.win == false){
      win.win = true
      win.x = true
    }
    
//<--------------------------------------------------------------------------->
    
    if(o.topLeft == true && o.topMiddle == true && o.topRight == true && win.win == false){
      win.win = true
      win.o = true
    }else if(o.middleLeft == true && o.middleMiddle == true && o.middleRight == true && win.win == false){
      win.win = true
      win.o = true
    }else if(o.bottomLeft == true && o.bottomMiddle == true && o.bottomRight == true && win.win == false){
      win.win = true
      win.o = true
    }else if(o.topLeft == true && o.middleLeft == true && o.bottomLeft == true && win.win == false){ 
      win.win = true
      win.o = true
    }else if(o.topMiddle == true && o.middleMiddle == true && o.bottomMiddle == true && win.win == false){
      win.win = true
      win.o = true
    }else if(o.topRight == true && o.middleRight == true && o.bottomRight == true && win.win == false){
      win.win = true
      win.o = true
    }else if(o.topLeft == true && o.middleMiddle == true && o.bottomRight == true && win.win == false){
      win.win = true
      win.o = true
      return winner
    }else if(o.topRight == true && o.middleMiddle == true && o.bottomLeft == true && win.win == false){
      win.win = true
      win.o = true
      
//<--------------------------------------------------------------------------->
      
    }else if(moveCount == 9 && win.win == false){
      win.win = true
      createP('Tie')
    }else if(win.x == true){
      createP('X wins')
      xPoints ++
      win.x = false
    }else if(win.o == true){
      createP('O wins')
      win.o = false
      oPoints ++
    }
  }
}
