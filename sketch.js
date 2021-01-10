var datbase;

var gameState,count;

var form,player,game;



function setup() {
  createCanvas(800,400);

  database = firebase.database();

  form = new Form();
   
    player = new Player();
    
  
}

function draw() {
  background(255); 
  
  
  form.display();

  player.getCount();

}

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}