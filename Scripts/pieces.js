// pieces shall be declared over here
let everythingObject;
var everythingObjectTemp = localStorage.getItem('everything');
console.log(everythingObjectTemp,'check 1');

if (everythingObjectTemp == null) {
    everythingObject = {
        titan1 : {
            id: 1,
            img : `<div class="game-pieces player1" data-id="1"><img src="../Images/titan-new-1.png"></div>`,
            row:0,
            column:4,
            imgTag: '<img src="../Images/titan-new-1.png">'
        },
        tank1 : {
            id: 2,
            img: `<div class="game-pieces player1" data-id="2"><img src="../Images/tank-new-1.png"></div>`,
            row:0,
            column:6
        },
        cannon1 :{
            id: 3,
            img: `<div class="game-pieces player1 " data-id="3"><img src="../Images/cannon-new-1.png"></div>`,
            row: 0,
            column:2
        },
        ricochet1 :{
            id: 4,
            img: `<div class="game-pieces player1 ricochet1" data-id="4"><img src="../Images/ricochet-new-1.png"></div>`,
            row:1,
            column:3,
            angle: 0
        },
        semiRicochet1 : {
            id: 5,
            img: `<div class="game-pieces player1 semi-ricochet1" data-id="5"><img src="../Images/semi-ricochet-new-1.png"></div>`,
            row:1,
            column:5,
            angle: 180
        },
        titan2 : {
            id: 6,
            img: `<div class="game-pieces player2" data-id="6"><img src="../Images/titan-new-2.png"></div>`,
            row:7,
            column:4,
            imgTag:'><img src="../Images/titan-new-2.png">'
        },
        tank2 : {
            id: 7,
            img: `<div class="game-pieces player2" data-id="7"><img src="../Images/tank-new-2.png"></div>`,
            row:7,
            column:2
        },
        cannon2 : {
            id: 8,
            img: `<div class="game-pieces player2" data-id="8"><img src="../Images/cannon-new-2.png"></div>`,
            row:7,
            column:6
        },
        ricochet2 : {
            id: 9,
            img: `<div class="game-pieces player2 ricochet2" data-id="9"><img src="../Images/ricochet-new-2.png"></div>`,
            row:6,
            column:5,
            angle: 180
        },
        semiRicochet2 : {
            id: 10,
            img: `<div class="game-pieces player2 semi-ricochet2" data-id="10"><img src="../Images/semi-ricochet-new-2.png"></div>`,
            row:6,
            column:3,
            angle:0
        }
    }
}
else {
    everythingObject = JSON.parse(everythingObjectTemp);
}

let piecePositions;
var piecePositionsTemp = localStorage.getItem('piecePosition');
console.log(piecePositionsTemp,'check2');

if (piecePositionsTemp == null ) {
    piecePositions = [
        ["","",everythingObject.cannon1.img,"",everythingObject.titan1.img,"",everythingObject.tank1.img, ""],
        ["", "", "", everythingObject.ricochet1.img, "", everythingObject.semiRicochet1.img, "", ""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","",everythingObject.semiRicochet2.img,"",everythingObject.ricochet2.img,"",""],
        ["","",everythingObject.tank2.img,"",everythingObject.titan2.img,"",everythingObject.cannon2.img,""]
    ]
}
else {
    piecePositions = JSON.parse(piecePositionsTemp);
}

let pieces = [everythingObject.titan1, everythingObject.tank1, everythingObject.cannon1, everythingObject.ricochet1, everythingObject.semiRicochet1,
    everythingObject.titan2, everythingObject.tank2, everythingObject.cannon2, everythingObject.ricochet2, everythingObject.semiRicochet2
]

let rotatablePieces = [everythingObject.ricochet1, everythingObject.ricochet2, everythingObject.semiRicochet1, everythingObject.semiRicochet2];

console.log(piecePositions);

