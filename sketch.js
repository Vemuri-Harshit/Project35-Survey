var datbase;

var gameState,count;

var form,player,game;



function setup() {
  createCanvas(windowWidth - 50,windowHeight - 50);

  database = firebase.database();

  form = new Form();
   
  player = new Player();
    
  
}

function draw() {
  background(128); 
  
  
  form.display();

  player.getCount();

}
