var curPos_X = 8;
var curPos_Y = 3;
var curRot = 0;
var moveDirection;
var map;
const directions = ["north", "east", "south", "west"];

$.getJSON("data.json", function(json) {
    map = json;
});


// Button listeners
const moveForwardBtn = document.getElementById('move-forward-button');
const moveBackBtn = document.getElementById('move-back-button');
const moveRightBtn = document.getElementById('move-right-button');
const moveLeftBtn = document.getElementById('move-left-button');
const turnRightBtn = document.getElementById('turn-right-button');
const turnLeftBtn = document.getElementById('turn-left-button');

moveForwardBtn.addEventListener('click', function() {
    moveDirection = directions[curRot]
    changeScene();
})

moveBackBtn.addEventListener('click', function() {
    moveDirection = directions[(curRot + 4 - 2) % 4]
    changeScene();
})

moveRightBtn.addEventListener('click', function() {
    moveDirection = directions[(curRot + 4 + 1) % 4]
    changeScene();
})

moveLeftBtn.addEventListener('click', function() {
    moveDirection = directions[(curRot + 4 -1) % 4]
    changeScene();
})

turnLeftBtn.addEventListener('click', function() {
    moveDirection = "n/a";
    curRot--;
    if (curRot < 0)
        curRot = 3;
    changeScene();
})

turnRightBtn.addEventListener('click', function() {
    moveDirection = "n/a";
    curRot++;
    curRot %= 4;
    changeScene();
})

// Movement Keybinds
$(document).keydown(function(event) {
    moveDirection = "n/a";
    switch(event.which){
        case 87:
        case 38:
            moveDirection = directions[curRot]
            break;
        case 65:
        case 37:
            moveDirection = directions[(curRot + 4 -1) % 4]
            break;
        case 83:
        case 40:
            moveDirection = directions[(curRot + 4 - 2) % 4]
            break;
        case 68:
        case 39:
            moveDirection = directions[(curRot + 4 + 1) % 4]
            break;
        case 81:
            curRot--;
            if (curRot < 0)
                curRot = 3;
            break;
        case 69:
            curRot++;
            curRot %= 4;
            break;
        return(0);
    }
    changeScene();
});

function changeScene() {
    curPosStr = `(${curPos_X},${curPos_Y})`;
    console.log(curPosStr)
    if (moveDirection != "n/a") {
        if (map[curPosStr][moveDirection]['type'] == 'wall') // Don't move
            console.log("Hit wall, no update");
        else if (map[curPosStr][moveDirection]['type'] == 'air') { // Move
            console.log("Hit air, update")
        
            nextPos_Y = curPos_Y;
            nextPos_X = curPos_X;
            console.log(moveDirection)
            if (moveDirection == 'north')
                nextPos_Y++;
            else if (moveDirection == 'west')
                nextPos_X--;
            else if (moveDirection == 'south')
                nextPos_Y--;
            else if (moveDirection == 'east')
                nextPos_X++;
            nextPosStr = `(${nextPos_X},${nextPos_Y})`;
            if (nextPosStr in map) { // Check if position exists on the map
                curPos_Y = nextPos_Y;
                curPos_X = nextPos_X;
                curPosStr = `(${curPos_X},${curPos_Y})`;
                console.log(directions[curRot]);
            }
        }
        console.log(`POS: (${curPos_X},${curPos_Y})`);
    }
    urlStr = map[curPosStr][directions[curRot]]['img'].replaceAll(",", "%2C"); // Replace ',' with %2C encoding
    console.log(urlStr)
    $("#game-screen").css("background-image", `url(${urlStr})`)
}