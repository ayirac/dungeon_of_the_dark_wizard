/// Todo, need to make JSON struct holding imgs for each moveDirection & Pull from it
var curPos_X = 8; // (x,y)
var curPos_Y = 3;
var map;
const directions = ["north", "east", "south", "west"];
var curRot = 0; // 0 north, 1 east, 2, south, 3 west

$.getJSON("data.json", function(json) {
    map = json;
});

// Movement Keybinds
$(document).keydown(function(event) {
    moveDirection = "n/a"; // cont here, setup buttons, shouldnt be hard. add rest of nodes, submit
    lookingDirection = "n/a";
    switch(event.which){
        case 87:
            console.log('W key pressed!');
            moveDirection = directions[curRot]
            break;
        case 65:
            console.log('A key pressed!');
            moveDirection = directions[(curRot + 4 -1) % 4]
            break;
        case 83:
            console.log('S key pressed!');
            moveDirection = directions[(curRot + 4 - 2) % 4]
            break;
        case 68:
            console.log('D key pressed!');
            moveDirection = directions[(curRot + 4 + 1) % 4]
            break;
        case 81:
            curRot--;
            if (curRot < 0)
                curRot = 3;
            console.log('Q key pressed!');
            break;
        case 69:
            curRot++;
            curRot %= 4;
            console.log('E key pressed!');
            break;
        return(0);
    }
    curPosStr = `(${curPos_X},${curPos_Y})`;
    console.log(curPosStr)
    if (moveDirection != "n/a") {
        if (map[curPosStr][moveDirection]['type'] == 'wall') // Don't move
            console.log("WALL HIT");
        else if (map[curPosStr][moveDirection]['type'] == 'air') { // Move
            console.log("AIR!")
        
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
        console.log(`(${curPos_X},${curPos_Y})`);
    }
    
    urlStr = map[curPosStr][directions[curRot]]['img'].replaceAll(",", "%2C"); // Replace ',' with %2C encoding
    console.log(urlStr)
    $("#game-screen").css("background-image", `url(${urlStr})`)

    
});