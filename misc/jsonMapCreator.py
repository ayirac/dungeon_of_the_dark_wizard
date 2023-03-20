import json

cells = {}

cellNumbers = { (0,0), (0,1), (0,2), (0,3), (1,3), (1,4), (1,5), (2,3), (2,4), (2,5), (3,3), (3,4), (3,5), (4,3), (4,4), (4,5), (4,6), (4,7), (4,8), (4,9), (4,10), (4,11), (4,12), (5,3), (5,12), (6,3), (6,4), (6,5), (6,6), (6,7), (6,12),
          (7,7), (7,8), (7,9), (7,12), (8,3), (8,4), (8,5), (8,6), (8,7), (8,9), (8,10), (8,12), (9,3), (9,4), (9,9), (9,10), (9,12), (10,3), (10,12), (11,3), (11,4), (11,5), (11,6), (11,7), (11,8), (11,9), (11,10), (11,11), (11,12), 
          (12,7), (13,7), (13,6), (14,6), (14,7)}

for c in cellNumbers:
    cells[f"({c[0]},{c[1]})"] = {
        "north": {
            "img": f"assets/images/views/{c[0]},{c[1]}_N.png",
            "type": "air"
        },
        "east": {
            "img": f"assets/images/views/{c[0]},{c[1]}_E.png",
            "type": "air"
        },
        "south": {
            "img": f"assets/images/views/{c[0]},{c[1]}_S.png",
            "type": "wall"
        },
        "west": {
            "img": f"assets/images/views/{c[0]},{c[1]}_W.png",
            "type": "wall"
        }
    }

with open("cells.json", "w") as f:
    json.dump(cells, f, indent=4, sort_keys=True)