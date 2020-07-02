var ball;

var database;

var positionRef;

var position;

function setup(){

    database=firebase.database();

    positionRef=database.ref("ball/position");

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    positionRef.on("value",readposition,error);

   
}

function readposition(data){
    position=data.val();

    console.log(position);

    ball.x=position.x;
    ball.y =position.y;
}

function error(){
    console.log('this program be in error');
}



function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    positionRef.update({
        'x': position.x + x,
        'y': position.y + y
    });
}
