
function preload() {
    //load the animations here
    gardenImg=loadAnimation("images/garden.png");
    cat1Img=loadAnimation("images/cat1.png");
    cat23Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat4Img=loadAnimation("images/cat4.png")
    mouse1Img=loadAnimation("images/mouse1.png")
    mouse23Img=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4Img=loadAnimation("images/mouse4.png")
    

}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(300,400,20,20)
    garden.addAnimation("bg",gardenImg)
    garden.scale=1.15

    cat=createSprite(780,700,20,20)
    cat.addAnimation("c",cat1Img)
    cat.scale=0.13


    mouse=createSprite(100,700,20,20)
    mouse.addAnimation("m",mouse1Img)
    mouse.scale=0.1
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)){
        mouse.addAnimation("m4",mouse4Img)
        mouse.changeAnimation("m4",mouse4Img)
        cat.addAnimation("c4",cat4Img)
        cat.changeAnimation("c4",cat4Img)
    
        cat.velocityX=0
    }
    
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("m2",mouse23Img)
    mouse.changeAnimation("m2",mouse23Img)
    cat.addAnimation("c2",cat23Img)
    cat.changeAnimation("c2",cat23Img)

    cat.velocityX=-2.7

    
}

    

}
