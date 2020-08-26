var database;
var count1 = 0;
var count2 = 0;

function setup(){
  createCanvas(displayWidth - 20, displayHeight-30)
  database = firebase.database();
}

function draw(){
  background(250);
}

function update(){
  database.ref('/').update({
    
  });
}