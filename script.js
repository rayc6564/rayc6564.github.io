import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom({
    background: [100, 100, 100],
    global: true,
    debug: true,
    maxFrameRate: 60,
    clearColor: [0, 0, 0, 1],
    width: window.innerWidth / 2,
    height: window.innerHeight,
});


loadSprite("player-movement", "player-movement.png", {
    sliceX: 9,
    sliceY: 1,
    anims: {
        "running": {from: 2, to: 4, speed: 10, loop: true},
        "idle": {from: 0, to: 0, speed: 2, loop: true},
        "top": {from: 5, to: 8, speed: 10, loop: true},
    }
});


function addPlatform(width, height, posX, posY, thickness){
    add([
        rect(width, height),
        pos(posX, posY),
        outline(thickness),
        area(),
        body({ isStatic: true }),
        color(0,0,0)
    ]);
};


function addText(theText, fontSize, posX, posY){
    add([
        text(theText, {
            size: fontSize,
        }),
        pos(posX, posY),
    
    ]);
}

function addBox(width, height, posX, posY, r, g, b, tag){
    add[add([
        rect(width, height),
        area(),
        outline(4),
        pos(posX, posY),

        color(r, g, b),

        body({ isStatic: true }),

        tag,
    ])];
};

function movement(sprite) {

    let isRunning = true;

    const speed = 300;

    onKeyDown("a", () => {
        sprite.move(-speed, 0);
        if(isRunning){
            sprite.play("running");
            sprite.scale.x = -0.5;
            isRunning = false;
        }
    });

    onKeyDown("d", () => {
        sprite.move(speed, 0);
        if(isRunning){
            sprite.play("running");
            sprite.scale.x = 0.5;
            isRunning = false;
        };
    });

    onKeyPress("space", () => {
        if(sprite.isGrounded()){
            sprite.jump(600);
        };
    })

    onKeyRelease("d", () => {
        sprite.stop();
        isRunning = true;
        sprite.play("idle");
    });

    onKeyRelease("a", () => {
        sprite.stop();
        isRunning = true;
        sprite.play("idle");
    });

    onKeyRelease("w", () => {
        sprite.stop();
        isRunning = true;
        sprite.play("idle");
    });

    onKeyRelease("s", () => {
        sprite.stop();
        isRunning = true;
        sprite.play("idle");
    });

};

scene("game", () => {

    setGravity(1600);

    const player = add([
        sprite("player-movement"),
        pos(120),
        anchor("center"),
        area(),
        body(),
        scale(0.5),
        "player",
    ]);

    // top
    addPlatform(width(), 10, 0, 0, 0.5);

    // bottom
    addPlatform(width(), 10, 0, height() - 10, 0.5);

    // right
    addPlatform(width(), height(), width() - 12, 0, 0.5);

    // left
    addPlatform(10, height(), 0, 0, 0.5);

    movement(player);

    addText("Use a and d to move, and press space to jump", 12, width() / 2, 120);
    addText("Go and hit the portfolio to proceed or click on it if you don't want to play", 12, 12, 180);
    addText("For mobile, sorry you can't play, you need to click on the portfolio to proceeed", 12, 12, height() / 2);


    // long boxes
    addBox(60, 20, width() / 2 - 120, height() - 100, 0, 0, 0, "box");
    addBox(60, 20, width() / 2 - 30, height() - 150, 0, 0, 0, "box");
    addBox(60, 20, width() / 2 + 80, height() - 250, 0, 0, 0, "box");
    addBox(60, 20, width() / 2 + 120, height() - 350, 0, 0, 0, "box");
    addBox(60, 20, width() / 2 - 10, height() - 400, 0, 0, 0, "box");


    addBox(80, 50, width() / 2 - 40, 15, 0, 0, 0, "link-box");
    addText("Portfolio", 15, width() / 2 - 38, 30, 0, 0, 0, "link-text");

    onClick("link-box", () =>{
        window.location.href = "aboutMe.html";
    });

    player.onCollide("link-box", () =>{
        location.href="aboutMe.html";
    });

});

go("game");