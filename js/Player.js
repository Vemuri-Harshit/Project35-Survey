class Player{

constructor(){

  this.name = null;
  this.index = null;
  this.email = null;
  this.a1 = null;
  this.a2 = null;
  this.a3 = null;
  this.a4 = null;
  this.a5 = null;
}

getCount(){

   database.ref('VoterCount').on("value",(data)=> { count = data.val(); } ) ;
  }
  
updateCount(count){

  database.ref('/').update( { VoterCount:count } );

}

update(){

var playerIndex = "Voters/Voter" + this.index;

  database.ref(playerIndex).set({
    name: this.name,
    EmailId: this.email,
    a1: this.a1,
    a2: this.a2,
    a3: this.a3,
    a4: this.a4,
    a5: this.a5
  });

}







}