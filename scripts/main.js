var gameOver = false;

var unitTypes = [
  squarb = {
    "hp" : 4,
    "dmg" : 1,
    "class" : "square"
  },
  squarb2 = {
    "hp" : 4,
    "dmg" : 1,
    "class" : "square2"
  },
  triangle = {
    "hp" : 2,
    "dmg" : 3,
    "class" : "triangle"
  },
  triangle2 = {
    "hp" : 2,
    "dmg" : 3,
    "class" : "triangle2"
  },
  circle = {
    "hp" : 1,
    "dmg" : 4,
    "class" : "circle"
  },
  circle2 = {
    "hp" : 1,
    "dmg" : 4,
    "class" : "circle2"
  }
]

var units = [
  p1Unit1 = {
    "id" : 1,
    "name" : "Timmy",
    "team" : 1,
    "type" : triangle,
    "hp" : triangle.hp,
    "dmg" : triangle.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 0
  },
  p1Unit2 = {
    "id" : 2,
    "name" : "Sammy",
    "team" : 1,
    "type" : squarb,
    "hp" : squarb.hp,
    "dmg" : squarb.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 4
  },
  p1Unit3 = {
    "id" : 3,
    "name" : "Suzy",
    "team" : 1,
    "type" : squarb,
    "hp" : squarb.hp,
    "dmg" : squarb.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 8
  },
  p1Unit4 = {
    "id" : 4,
    "name" : "Cindy",
    "team" : 1,
    "type" : circle,
    "hp" : circle.hp,
    "dmg" : circle.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 12
  },
  p2Unit1 = {
    "id" : 5,
    "name" : "Sam",
    "team" : 2,
    "type" : circle2,
    "hp" : circle2.hp,
    "dmg" : circle2.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 3
  },
  p2Unit2 = {
    "id" : 6,
    "name" : "Solomon",
    "team" : 2,
    "type" : triangle2,
    "hp" : triangle2.hp,
    "dmg" : triangle2.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 7
  },
  p2Unit3 = {
    "id" : 7,
    "name" : "Simran",
    "team" : 2,
    "type" : squarb2,
    "hp" : squarb2.hp,
    "dmg" : squarb2.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 11
  },
  p2Unit4 = {
    "id" : 8,
    "name" : "Sumail",
    "team" : 2,
    "type" : triangle2,
    "hp" : triangle2.hp,
    "dmg" : triangle2.dmg,
    "selected" : false,
    "moved" : false,
    "position" : 15
  }
]
var board = [
  tile0 = {
    "id": 0,
    "contains": false,
    "position": 0,
    "canMoveTo": [0,1,6]
  },
  tile1 = {
    "id": 1,
    "contains": false,
    "position": 1,
    "canMoveTo": [0,1,2,7]
  },
  tile2 = {
    "id": 2,
    "contains": false,
    "position": 2,
    "canMoveTo": [1,2,3,8]
  },
  tile3 = {
    "id": 3,
    "contains": false,
    "position": 3,
    "canMoveTo": [2,3,4,9]
  },
  tile4 = {
    "id": 4,
    "contains": false,
    "position": 4,
    "canMoveTo": [3,4,5,10]
  },
  tile5 = {
    "id": 5,
    "contains": false,
    "position": 5,
    "canMoveTo": [4,5,6,11]
  },
  tile6 = {
    "id": 6,
    "contains": p1Unit1,
    "position": 6,
    "canMoveTo": [0,6,7,12]
  },
  tile7 = {
    "id": 7,
    "contains": false,
    "position": 7,
    "canMoveTo": [1,6,7,8,13]
  },
  tile8 = {
    "id": 8,
    "contains": false,
    "position": 8,
    "canMoveTo": [2,7,8,9,14]
  },
  tile9 = {
    "id": 9,
    "contains": false,
    "position": 9,
    "canMoveTo": [3,8,9,10,15]
  },
  tile10 = {
    "id": 10,
    "contains": false,
    "position": 10,
    "canMoveTo": [4,9,10,11,16]
  },
  tile11 = {
    "id": 11,
    "contains": p2Unit1,
    "position": 11,
    "canMoveTo": [5,10,11,17]
  },
  tile12 = {
    "id": 12,
    "contains": p1Unit2,
    "position": 12,
    "canMoveTo": [6,11,12,13,18]
  },
  tile13 = {
    "id": 13,
    "contains": false,
    "position": 13,
    "canMoveTo": [7,12,13,14,19]
  },
  tile14 = {
    "id": 14,
    "contains": false,
    "position": 14,
    "canMoveTo": [8,13,14,15,20]
  },
  tile15 = {
    "id": 15,
    "contains": false,
    "position": 15,
    "canMoveTo": [9,14,15,16,21]
  },
  tile16 = {
    "id": 16,
    "contains": false,
    "position": 16,
    "canMoveTo": [10,15,16,17,22]
  },
  tile17 = {
    "id": 17,
    "contains": p2Unit2,
    "position": 17,
    "canMoveTo": [11,16,17,23]
  },
  tile18 = {
    "id": 18,
    "contains": p1Unit3,
    "position": 18,
    "canMoveTo": [12,18,19,24]
  },
  tile19 = {
    "id": 19,
    "contains": false,
    "position": 19,
    "canMoveTo": [13,18,19,20,25]
  },
  tile20 = {
    "id": 20,
    "contains": false,
    "position": 20,
    "canMoveTo": [14,19,20,21,26]
  },
  tile21 = {
    "id": 21,
    "contains": false,
    "position": 21,
    "canMoveTo": [15,20,21,22,27]
  },
  tile22 = {
    "id": 22,
    "contains": false,
    "position": 22,
    "canMoveTo": [16,21,22,23,28]
  },
  tile23 = {
    "id": 23,
    "contains": p2Unit3,
    "position": 23,
    "canMoveTo": [17,22,23,24,29]
  },
  tile24 = {
    "id": 24,
    "contains": p1Unit4,
    "position": 24,
    "canMoveTo": [18,23,24,25,30]
  },
  tile25 = {
    "id": 25,
    "contains": false,
    "position": 25,
    "canMoveTo": [19,24,25,26,31]
  },
  tile26 = {
    "id": 26,
    "contains": false,
    "position": 26,
    "canMoveTo": [20,25,26,27,32]
  },
  tile27 = {
    "id": 27,
    "contains": false,
    "position": 27,
    "canMoveTo": [21,26,27,28,33]
  },
  tile28 = {
    "id": 28,
    "contains": false,
    "position": 28,
    "canMoveTo": [22,27,28,29,34]
  },
  tile29 = {
    "id": 29,
    "contains": p2Unit4,
    "position": 29,
    "canMoveTo": [23,28,29,35]
  },
  tile30 = {
    "id": 30,
    "contains": false,
    "position": 30,
    "canMoveTo": [24,30,31]
  },
  tile31 = {
    "id": 31,
    "contains": false,
    "position": 31,
    "canMoveTo": [25,30,31,32]
  },
  tile32 = {
    "id": 32,
    "contains": false,
    "position": 32,
    "canMoveTo": [26,31,32,33]
  },
  tile33 = {
    "id": 33,
    "contains": false,
    "position": 33,
    "canMoveTo": [27,32,33,34]
  },
  tile34 = {
    "id": 34,
    "contains": false,
    "position": 34,
    "canMoveTo": [28,33,34,35]
  },
  tile35 = {
    "id": 35,
    "contains": false,
    "position": 35,
    "canMoveTo": [29,34,35]
  },
];
var selectedObject = false;
var oldTile = false;
var players = [
  p1 = {
    "name" : "player1",
    "team" : 1,
    "moves" : 0,
    "units" : [p1Unit1,p1Unit2,p1Unit3,p1Unit4]
  },
  p2 = {
    "name" : "player2",
    "team" : 2,
    "moves" : 0,
    "units" : [p2Unit1,p2Unit2,p2Unit3,p2Unit4]
  }
]
console.log(p1.units);
console.log(p2.units);
// var squareObject = new createUnit("square", "square", false, false, 0);
console.log(p1Unit1);
// tile0.contains = squareObject;
console.log(tile0);

var turn = p1;
console.log(turn);
//When a square is clicked swap the turn to X or back to naughts
function swapTurn(){
  if(p1.moves >= p1.units.length){
    p1.moves = 0;
    p1Unit1.moved = false;
    p1Unit2.moved = false;
    p1Unit3.moved = false;
    p1Unit4.moved = false;
  }
  if(p2.moves >= p2.units.length){
    p2.moves = 0;
    p2Unit1.moved = false;
    p2Unit2.moved = false;
    p2Unit3.moved = false;
    p2Unit4.moved = false;
  }
  if(turn == p1){

    turn = p2;
    p1.moves += 1;
    console.log(turn);
  }else if (turn == p2) {
    turn = p1;
    p2.moves += 1;
    console.log(turn);
  }
  if(p1.units.length == 0){
    gameOver = true;
    $(".player2UnitInfo").html("You have won");
    $(".player1UnitInfo").html("You have lost");
  }
  if(p2.units.length == 0){
    gameOver = true;
    $(".player1UnitInfo").html("You have won");
    $(".player2UnitInfo").html("You have lost");
  }
}

  $('#myTable td').each(function() {
    // debugger;
      var held = board[$(this).data("num")].contains;
      var boardSquare = board[$(this).data("num")];
      var thisSquare = $(this);
      // console.log("held is " + held);
      thisSquare.bind("click", function(){
        if(!gameOver){
          console.log("contains is " + thisSquare.contains);
          console.log((boardSquare.contains)? true : false);
          // debugger;
            if(boardSquare.contains && !selectedObject){
              if(turn.team == held.team){
                  if(!held.moved){
                  selectedObject = held;
                  $("."+turn.name+"UnitName").html("Current Unit: " + selectedObject.name);
                  $("."+turn.name+"UnitHP").html("Health: " + selectedObject.hp);
                  $("."+turn.name+"UnitDMG").html("Damage: " + selectedObject.dmg);
                  oldObj = boardSquare;
                  boardSquare.contains = false;
                  // console.log("its " + held.id);
                  selectedObject.selected = true;
                  selectedObject.position = thisSquare.data("num");
                  thisSquare.removeClass(held.type.class);
                  thisSquare.html("M");
                  thisSquare.addClass("selected");
                  oldTile = thisSquare;
                  console.log(turn.name + " " + turn.moves);
                  // console.log(selectedObject.type.class);
                  // console.log(this);
                  // console.log(held);
                }else{
                  console.log("that piece has moved");
                  $("."+turn.name+"UnitName").html("Current Unit: " + boardSquare.contains.name);
                  $("."+turn.name+"UnitHP").html("Health: " + boardSquare.contains.hp);
                  $("."+turn.name+"UnitDMG").html("Damage: " + boardSquare.contains.dmg);
                  $("."+turn.name+"UnitInfo").html("This piece has already moved");
                }
              }else{
                console.log("This piece is not yours");
                $("."+turn.name+"UnitInfo").html("This piece is not yours");
              }


            }else if(boardSquare.canMoveTo.includes(selectedObject.position)){
              if(boardSquare.contains == false ){
                // debugger;
                selectedObject.moved = true;
                held = selectedObject;
                oldTile.removeClass("selected");
                oldTile.html("");
                selectedObject.position = thisSquare.data("num");
                boardSquare.contains = selectedObject;
                thisSquare.addClass(selectedObject.type.class);
                selectedObject.selected = false;
                selectedObject = false;
                // console.log(this);
                // console.log(held);
                console.log("p1 moves " + p1.moves);
                console.log("p2 moves " + p2.moves);
                swapTurn();

              }else if(boardSquare.contains.team != selectedObject.team){
                console.log("I'm attacking");
                $("."+turn.name+"UnitInfo").html(selectedObject.name + " is attacking");
                oldTile.removeClass("selected");
                oldTile.html("");
                debugger;
                boardSquare.contains.hp -= selectedObject.dmg;
                if(boardSquare.contains.hp > 0){
                }else{
                  thisSquare.html("X");
                  thisSquare.removeClass(boardSquare.contains.type.class);
                  thisSquare.addClass("clear");
                  var index = p1.units.indexOf(boardSquare.contains);
                  if(turn.team == 1){
                    p2.units.splice(index, 1);
                    $("."+turn.name+"UnitInfo").html(boardSquare.contains.name + " has died");
                  }else{
                    p1.units.splice(index, 1);
                  }
                  console.log(p1.units);
                  console.log(p2.units);
                  boardSquare.contains = false;
                  thisSquare.contains = false;
                }

                selectedObject.moved = true;
                selectedObject.selected = false;
                oldTile.addClass(selectedObject.type.class);
                // oldTile.html(selectedObject.hp);
                oldObj.contains = selectedObject;
                selectedObject.position = oldTile.data();
                selectedObject = false;
                // console.log(this);
                // console.log(held);
                console.log("p1 moves " + p1.moves);
                console.log("p2 moves " + p2.moves);
                swapTurn();
              }else{
                console.log("thats our team");
              }
            }
        }else{
          alert("The game has ended");
        }
      });
    });
