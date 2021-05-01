class Player{

constructor(){

  this.name = null;
  this.index = null;
  this.email = null;

}

getCount(){

   database.ref('VoterCount').on("value",(data)=> { count = data.val(); } ) ;
  }
  
updateCount(count){

  database.ref('/').update( { VoterCount:count } );

}

update(){

var playerIndex = "Voters/Voter" + this.index;

database.ref(playerIndex).set( { name: this.name, EmailId:this.email } );

}







}