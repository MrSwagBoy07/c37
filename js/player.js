class Player {
    constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
    }
    getcount(){
        var countref=database.ref('playerCount');
        countref.on("value",function(data){
         playerCount=data.val();
        }) 
    }
    updatecount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
        name:this.name,distance:this.distance
        })
    }
     static getinfo(){
         var playerinfo=database.ref('players');
         playerinfo.on("value",(data)=>{
             allplayer=data.val();
         })
     }
}