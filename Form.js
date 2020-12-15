class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput('Name');
        this.button = createButton('Play');
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        this.title.html("Save Your Mother!");
        this.title.position((displayWidth/2)-50, (displayHeight/2)-200);
        this.input.position((displayWidth/2)-50, (displayHeight/2)-50);
        this.button.position((displayWidth/2)-50, (displayHeight/2)-20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            gameState = 1;
            this.title.position((displayWidth/2)-50, (displayHeight/2)-420);
        })
    }
}