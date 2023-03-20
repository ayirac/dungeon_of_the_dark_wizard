/// Todo, need to make JSON struct holding imgs for each direction & Pull from it
cur_pos = '(0,0)'
var map;
$.getJSON("data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    map = json
});
// Movement Keybinds
$(document).keydown(function(event) {
    direction = "n/a";
    switch(event.which){
        case 87:
            alert('W key pressed!');
            direction = "north"
            break;
        case 65:
            alert('A key pressed!');
            direction = "west"
            break;
        case 83:
            alert('S key pressed!');
            direction = "south"
            break;
        case 68:
            alert('S key pressed!');
            direction = "east"
            break;
        case 81:
            alert('Q key pressed!');
            break;
        case 69:
            alert('E key pressed!');
            break;
    }
    if (map[cur_pos][direction]['type'] == 'wall')
        alert("WALL HIT");
        // DONT MOVE
    else if (map[cur_pos][direction]['type'] == 'air')
        alert("AIR!")
        // MOVE!
        // (x,y), need to parse this string into int
        pos = cur_pos.replace(/[()]/g, '');
        x = pos.replace(//g, '');
        alert(x) // cont here
});