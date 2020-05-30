class Form {
    constructor(){
     this.input=createInput("name");
     this.button=createButton('hit me');
     this.greeting=createElement('h5');
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
   display(){
    var title=createElement('h4');
    title.html("multiplayer game");
    title.position(200,100);
   
    this.input.position(displayWidth/2,displayHeight/2);
    this.button.position(displayWidth/2+30,displayHeight/2+30);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updatecount(playerCount);
        this.greeting.html("hello"+ player.name);
        this.greeting.position(displayWidth/2,displayHeight/2);
    })
   } 
}