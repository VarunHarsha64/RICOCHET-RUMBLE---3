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
            img: `<div class="game-pieces player1" data-id="2"><img src="../Images/tank-new-updated-1.png"></div>`,
            row:0,
            column:6,
            angle : 0 ,
            allow: 'right'
        },
        cannon1 :{
            id: 3,
            img: `<div class="game-pieces player1 " data-id="3"><img src="../Images/cannon-new-1.png"></div>`,
            row: 0,
            column:2
        },
        ricochet11 :{
            id: 4,
            img: `<div class="game-pieces player1 ricochet1" data-id="4"><img src="../Images/ricochet-new-1.png"></div>`,
            row:1,
            column:3,
            angle: 0
        },
        ricochet12 :{
            id: 5,
            img: `<div class="game-pieces player1 ricochet1" data-id="5"><img src="../Images/ricochet-new-1.png"></div>`,
            row:1,
            column:1,
            angle: 0
        },
        semiRicochet11 : {
            id: 6,
            img: `<div class="game-pieces player1 semi-ricochet1" data-id="6"><img src="../Images/semi-ricochet-new-1.png"></div>`,
            row:1,
            column:5,
            angle: 180
        },
        semiRicochet12 : {
            id: 7,
            img: `<div class="game-pieces player1 semi-ricochet1" data-id="7"><img src="../Images/semi-ricochet-new-1.png"></div>`,
            row:1,
            column:6,
            angle: 180
        },
        titan2 : {
            id: 8,
            img: `<div class="game-pieces player2" data-id="8"><img src="../Images/titan-new-2.png"></div>`,
            row:7,
            column:4,
            imgTag:'><img src="../Images/titan-new-2.png">'
        },
        tank2 : {
            id: 9,
            img: `<div class="game-pieces player2" data-id="9"><img src="../Images/tank-new-updated-2.png"></div>`,
            row:7,
            column:2,
            angle: 0,
            allow: 'right'
        },
        cannon2 : {
            id: 10,
            img: `<div class="game-pieces player2" data-id="10"><img src="../Images/cannon-new-2.png"></div>`,
            row:7,
            column:6
        },
        ricochet21 : {
            id: 11,
            img: `<div class="game-pieces player2 ricochet2" data-id="11"><img src="../Images/ricochet-new-2.png"></div>`,
            row:6,
            column:5,
            angle: 180
        },
        ricochet22 : {
            id: 12,
            img: `<div class="game-pieces player2 ricochet2" data-id="12"><img src="../Images/ricochet-new-2.png"></div>`,
            row:6,
            column:4,
            angle: 180
        },
        semiRicochet21 : {
            id: 13,
            img: `<div class="game-pieces player2 semi-ricochet2" data-id="13"><img src="../Images/semi-ricochet-new-2.png"></div>`,
            row:6,
            column:2,
            angle:0
        },
        semiRicochet22 : {
            id: 14,
            img: `<div class="game-pieces player2 semi-ricochet2" data-id="14"><img src="../Images/semi-ricochet-new-2.png"></div>`,
            row:6,
            column:1,
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
        ["", everythingObject.ricochet12.img, "", everythingObject.ricochet11.img, "", everythingObject.semiRicochet11.img, everythingObject.semiRicochet12.img, ""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["",everythingObject.semiRicochet22.img,everythingObject.semiRicochet21.img,"",everythingObject.ricochet22.img,everythingObject.ricochet21.img,"",""],
        ["","",everythingObject.tank2.img,"",everythingObject.titan2.img,"",everythingObject.cannon2.img,""]
    ]
}
else {
    piecePositions = JSON.parse(piecePositionsTemp);
}

let pieces = [
    everythingObject.titan1,
    everythingObject.tank1, 
    everythingObject.cannon1, 
    everythingObject.titan2,
    everythingObject.tank2, 
    everythingObject.cannon2,
    everythingObject.ricochet11,
    everythingObject.ricochet12, 
    everythingObject.ricochet21,
    everythingObject.ricochet22, 
    everythingObject.semiRicochet11,
    everythingObject.semiRicochet12,
    everythingObject.semiRicochet21,
    everythingObject.semiRicochet22
]

let rotatablePieces = [
    everythingObject.tank1,
    everythingObject.tank2,
    everythingObject.ricochet11,everythingObject.ricochet12, everythingObject.ricochet21,everythingObject.ricochet22, everythingObject.semiRicochet11,everythingObject.semiRicochet12, everythingObject.semiRicochet21,everythingObject.semiRicochet22
    
];

let tanks = [
    everythingObject.tank1,everythingObject.tank2
]

let swapablePieces = [
    everythingObject.tank1,
    everythingObject.tank2,
    everythingObject.ricochet11,
    everythingObject.ricochet12, 
    everythingObject.ricochet21,
    everythingObject.ricochet22, 
    everythingObject.semiRicochet11,
    everythingObject.semiRicochet12,
    everythingObject.semiRicochet21,
    everythingObject.semiRicochet22

]

console.log(piecePositions);



