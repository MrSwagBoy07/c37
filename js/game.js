class Game {
    constructor(){
 }
 getState(){
 var gameref=database.ref('gameState');
 gameref.on("value",function(data){
     gameState=data.val();
 }) 
 }
 update(state){
     database.ref('/').update({
         gameState:state
     })
 }
   async start(){
       if(gameState===0){
        player= new Player();
        var countref=await database.ref('playerCount').once("value");
        if(countref.exists()){
        playerCount=countref.val();
        player.getcount();
        }
        form=new Form();
        form.display();
    }
     car1=createSprite(100,200);
     car2=createSprite(300,200);
     car3=createSprite(500,200);
     car4=createSprite(700,200);
     allcars=[car1,car2,car3,car4]
   }
     play(){
     form.hide();
     textSize(20);
     text("game starts",200,150);
     Player.getinfo();
     if(allplayer!==undefined){
     var index=0;
     var x=0, y;
     for(var pli in allplayer){
         index=index+1;
         x=x+200;
         y=displayHeight-allplayer[pli].distance
         allcars[index-1].x=x;
         allcars[index-1].y=y;
         if(index===player.index){
             allcars[index-1].shapeColor="yellow";
             camera.position.x=displayWidth/2;
             camera.position.y=allcars[index-1].y
         }
     }
     }
     if(keyIsDown(UP_ARROW)&&player.index!==null){
     player.distance+=50;
     player.update()
     }
     drawSprites();
    }
}