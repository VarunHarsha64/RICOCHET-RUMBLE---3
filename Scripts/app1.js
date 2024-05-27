/* general functions to be decalred over here */

function handleGridRender() {
    document.querySelector('.js-game-board').innerHTML = '';
    let html = "";
    for(let i=0;i<=7;i++) {
        let html1='';
        html1 = `<div class="game-row-${i} game-row">\n`;
        let html2='';
        for(let j=0 ; j<=7 ; j++) {
            html2 = html2 + `<div class="game-column-${j} game-box game-box-${i}-${j}" data-position="${i}${j}"></div>\n`;
        }
        html1 = html1+html2+"</div>\n";
        html+=html1;
    }
    document.querySelector('.js-game-board').innerHTML = html;
}

function handlePiecesRender() {
    // piecePositions = JSON.parse(localStorage.getItem('piecePosition'));

    piecePositions.forEach((row,i)=>{
        row.forEach((piece,j)=>{
            const pieceBox = document.querySelector(`.game-box-${i}-${j}`);
            pieceBox.innerHTML= piece ;

        });
    });

    rotatablePieces.forEach((piece,i)=>{
        document.querySelector(`.game-box-${piece.row}-${piece.column} div img`).style.transform = `rotate(${piece.angle}deg)`
        });
}

function handleAngleCheck() {
    rotatablePieces.forEach((piece)=>{
        if(piece.angle % 360 === 0) {
            piece.angle = 0;
        }
        else if ( piece.angle % 270 === 0) {
            if (piece.angle >0) {
                piece.angle = -90;
            }
            else {
                piece.angle = 90;
            }
        }
        else if ( piece.angle % 180 === 0) {
                piece.angle = 180;
        }
    });
}

function handleMove1(e) {
    document.querySelectorAll('.player1').forEach((piecenew,j)=>{
        piecenew.removeEventListener('click', handleMove1);
    }); 
    //test succesful - removal of event listener is also successful
    //console.log('testing if click on pieces work');



    const targetId = parseInt(e.target.parentNode.dataset.id);
    //console.log(parseInt(e.target.parentNode.dataset.id),'testing if id of elementis same as that of clicked element');
    //test successful - clicking anywhere inside the box gives the id of the object

    console.log(e.target.parentNode,'testing to remove touch piece');

    e.target.parentNode.addEventListener('click',()=>{
        gameEngine();
        var buttonLeft = document.querySelector('.left-rotate');
        var newButtonLeft = buttonLeft.cloneNode(true);
        buttonLeft.parentNode.replaceChild(newButtonLeft, buttonLeft); 

        var buttonRight = document.querySelector('.right-rotate');
        var newButtonRight = buttonRight.cloneNode(true);
        buttonRight.parentNode.replaceChild(newButtonRight, buttonRight);
    })

    if (targetId === 1) {
        handleTitanMove(everythingObject.titan1,1);
    }
    else if (targetId === 2) {
        handleTankMove(everythingObject.tank1,1);
    }
    else if (targetId === 3) {
        handleCannonMove(everythingObject.cannon1,1);
    }
    else if (targetId === 4) {
        document.querySelector('.hidden-buttons').classList.add('hidden-buttons-visible');
        handleRicochetMove(everythingObject.ricochet1,1);
    }
    else if (targetId === 5) {
        document.querySelector('.hidden-buttons').classList.add('hidden-buttons-visible');
        handleSemiRicochetMove(everythingObject.semiRicochet1,1);
    }
}

function handleMove2(e) {
    document.querySelectorAll('.player2').forEach((piecenew,j)=>{
        piecenew.removeEventListener('click', handleMove2);
    }); 
    //test succesful - removal of event listener is also successful
    //console.log('testing if click on pieces work');

    const targetId = parseInt(e.target.parentNode.dataset.id);
    //console.log(parseInt(e.target.parentNode.dataset.id),'testing if id of elementis same as that of clicked element');
    //test successful - clicking anywhere inside the box gives the id of the object

    e.target.parentNode.addEventListener('click',()=>{
        gameEngine();
        var buttonLeft = document.querySelector('.left-rotate');
        var newButtonLeft = buttonLeft.cloneNode(true);
        buttonLeft.parentNode.replaceChild(newButtonLeft, buttonLeft); 

        var buttonRight = document.querySelector('.right-rotate');
        var newButtonRight = buttonRight.cloneNode(true);
        buttonRight.parentNode.replaceChild(newButtonRight, buttonRight); 
    });

    if (targetId === 6) {
        handleTitanMove(everythingObject.titan2,2);
    }
    else if (targetId === 7) {
        handleTankMove(everythingObject.tank2,2);
    }
    else if (targetId === 8) {
        handleCannonMove(everythingObject.cannon2,2);
    }
    else if (targetId === 9) {
        document.querySelector('.hidden-buttons').classList.add('hidden-buttons-visible');
        handleRicochetMove(everythingObject.ricochet2,2);
    }
    else if (targetId === 10) {
        document.querySelector('.hidden-buttons').classList.add('hidden-buttons-visible');
        handleSemiRicochetMove(everythingObject.semiRicochet2,2);
    }
}

function handleAvailableSpaces(availableSpaces,f,row,column,PiecePlayer) {

    function handleRotateRight() {
        PiecePlayer.angle += 90;
        // flag*=-1;

        document.querySelectorAll(`available-boxes-${f}`).forEach((availableBox)=>{
            availableBox.classList.add('game-box');
            availableBox.classList.remove(`available-boxes-${f}`);
        });
        document.querySelector('.right-rotate').removeEventListener('click',handleRotateRight);
        document.querySelector('.left-rotate').removeEventListener('click',handleRotateLeft);
        document.querySelector('.hidden-buttons').classList.remove('hidden-buttons-visible');

        gameEngine();
        // if(firstShootStop) {
            if (flag===1) {
                handleBulletShoot(everythingObject.cannon1,1);
                console.log('test4');
            }
            else if (flag === -1) {
                handleBulletShoot(everythingObject.cannon2,2);
            }
        // }
        // firstShootStop++;
    }
    
    function handleRotateLeft() {
        PiecePlayer.angle -= 90;
        // flag*=-1;

        document.querySelectorAll(`available-boxes-${f}`).forEach((availableBox)=>{
            availableBox.classList.add('game-box');
            availableBox.classList.remove(`available-boxes-${f}`);
        });
        document.querySelector('.right-rotate').removeEventListener('click',handleRotateRight);
        document.querySelector('.left-rotate').removeEventListener('click',handleRotateLeft);

        document.querySelector('.hidden-buttons').classList.remove('hidden-buttons-visible');

        gameEngine();
        // if(firstShootStop) {
            if (flag===1) {
                handleBulletShoot(everythingObject.cannon1,1);
                console.log('test4');
            }
            else if (flag === -1) {
                handleBulletShoot(everythingObject.cannon2,2);
            }
        // }
        // firstShootStop++;
    }


    availableSpaces.forEach(([rowNew,columnNew],i)=>{
        const gameBox = document.querySelector(`.game-box-${rowNew}-${columnNew}`);
        console.log('test1');

        const originalPieceBox = document.querySelector(`.game-box-${row}-${column}`);
        gameBox.classList.remove('game-box')
        gameBox.classList.add(`available-boxes-${f}`)

        function movingFunction(e){
            let swapHtml = originalPieceBox.innerHTML;
            console.log(swapHtml);
            gameBox.innerHTML = swapHtml;
            originalPieceBox.innerHTML = "";

            document.querySelectorAll(`.available-boxes-${f}`).forEach((availableBox)=>{
                availableBox.removeEventListener('click',movingFunction);
                console.log('test3');
                availableBox.classList.add('game-box');
                availableBox.classList.remove(`available-boxes-${f}`);
                console.log('test2')
            });

            // document.querySelectorAll(`.available-boxes-${f}`).forEach((availableBox)=>{
            //     availableBox.removeEventListener('click',movingFunction);
            // });

            let targetPosition = e.target.dataset.position;
            let targetRow = parseInt(targetPosition[0]);
            let targetColumn = parseInt(targetPosition[1]);

            PiecePlayer.row = targetRow;
            PiecePlayer.column = targetColumn;

            let originalPosition = originalPieceBox.dataset.position;

            let originalRow = parseInt(originalPosition[0]);
            let originalColumn = parseInt(originalPosition[1]);

            let temp = piecePositions[originalRow][originalColumn];

            piecePositions[originalRow][originalColumn] = "";
            piecePositions[targetRow][targetColumn] = temp;

            // flag*=-1;

            document.querySelector('.left-rotate').removeEventListener('click',handleRotateLeft);

            document.querySelector('.right-rotate').removeEventListener('click',handleRotateRight);

            document.querySelector('.hidden-buttons').classList.remove('hidden-buttons-visible');
            gameEngine();

            // if(firstShootStop) {
                if (flag===1) {
                    handleBulletShoot(everythingObject.cannon1,1);
                    console.log('test4');
                }
                else if (flag === -1) {
                    handleBulletShoot(everythingObject.cannon2,2);
                }
            // }
            // firstShootStop++;

        }

        gameBox.addEventListener('click',movingFunction);
        

    });

    if (PiecePlayer.id ===4 ||PiecePlayer.id ===5||PiecePlayer.id ===9||PiecePlayer.id ===10 ) {
        document.querySelector('.left-rotate').addEventListener('click',handleRotateLeft);

        document.querySelector('.right-rotate').addEventListener('click',handleRotateRight);
        console.log(PiecePlayer.id); //testing to see if condition is being satisfied here.
    }
}

function calculateAvailableSpaces(column,row) { // not for cannon
    console.log(column,row);
    // testing if correct column, row is being inputted to this function
    let availableSpaces = [];

    for(let i=row-1;i<=row+1;i++){

        if(i<=7&&i>=0){
            for(let j=column-1;j<=column+1;j++){
                if(j<=7&&j>=0){
                    if(piecePositions[i][j] === "") {
                        availableSpaces.push([i,j]);
                    }
                }
            }
        }
    }

    return availableSpaces;
}

function handleTitanMove(PiecePlayer,f) {
    let column = PiecePlayer.column;
    let row = PiecePlayer.row;

    let availableSpaces = calculateAvailableSpaces(column,row);
    console.log(availableSpaces);
    // checking if algorithm for available spaces is correct

    handleAvailableSpaces(availableSpaces,f,row,column,PiecePlayer);
}
function handleCannonMove(PiecePlayer,f) {
    let column = PiecePlayer.column;
    let row = PiecePlayer.row;

    let availableSpaces = [];
    if (column-1 >=0 ) {
        if (piecePositions[row][column-1] === "") {
            availableSpaces.push([row,column-1])
        }
    }
    if (column+1 <=7) {
        if(piecePositions[row][column+1] === "") {
            availableSpaces.push([row,column+1])
        }
    }
    console.log(availableSpaces);
    // checking if algorithm for available spaces is correct

    handleAvailableSpaces(availableSpaces,f,row,column,PiecePlayer);
}
function handleRicochetMove(PiecePlayer,f) {
    let column = PiecePlayer.column;
    let row = PiecePlayer.row;

    let availableSpaces = calculateAvailableSpaces(column,row);
    console.log(availableSpaces);
    // checking if algorithm for available spaces is correct

    handleAvailableSpaces(availableSpaces,f,row,column,PiecePlayer);
}
function handleSemiRicochetMove(PiecePlayer,f) {
    let column = PiecePlayer.column;
    let row = PiecePlayer.row;

    let availableSpaces = calculateAvailableSpaces(column,row);
    console.log(availableSpaces);
    // checking if algorithm for available spaces is correct

    handleAvailableSpaces(availableSpaces,f,row,column,PiecePlayer);
}
function handleTankMove(PiecePlayer,f) {
    let column = PiecePlayer.column;
    let row = PiecePlayer.row;

    let availableSpaces = calculateAvailableSpaces(column,row);
    console.log(availableSpaces);
    // checking if algorithm for available spaces is correct

    handleAvailableSpaces(availableSpaces,f,row,column,PiecePlayer);
}

function gameEngine() {

    document.querySelector('.hidden-buttons').classList.remove('hidden-buttons-visible');

    handleAngleCheck();
    handleGridRender();
    handlePiecesRender();

    if(flag === 1) {
        document.querySelectorAll('.player1').forEach((piece,i)=>{
            piece.addEventListener('click', handleMove1);
        });
    }
    else if(flag === -1) {
        document.querySelectorAll('.player2').forEach((piece,i)=>{
            piece.addEventListener('click', handleMove2);
        });
    }

    handlePlayerTurn(flag);

    localStorage.setItem('everything',JSON.stringify(everythingObject));
    localStorage.setItem('piecePosition',JSON.stringify(piecePositions));
    localStorage.setItem('flag',flag);
    
}

function handlePlayerTurn(flag) {
    let turn;
    if (flag === 1) {
        turn = 1;
    }
    else {
        turn = 2;
    }
    document.querySelector('.player').innerHTML = `Player ${turn}`;
}

function handleBulletShoot(PiecePlayer,f) {

    
    const bulletImg = document.createElement('img');
    bulletImg.classList.add('bullet');
    bulletImg.src = '../Images/bullet.png';

    let bulletHeight = bulletImg.naturalHeight;
    let bulletWidth = bulletImg.naturalWidth;
    
    //"<img class='bullet' src='./Images/bullet.png'>"
    document.querySelector('.js-game-board').appendChild(bulletImg);

    const bullet = document.querySelector('.bullet');

    x=calculateXCenter(PiecePlayer.column,bulletHeight,bulletWidth);
    y=calculateYCenter(PiecePlayer.row,bulletHeight,bulletWidth);

    console.log(x,y);

    bullet.style.left = x + 'px'; 
    bullet.style.top = y + 'px'; 

    let ricochets = [
        {
            x:calculateXCenter(everythingObject.ricochet1.column,bulletHeight,bulletWidth),
            y:calculateYCenter(everythingObject.ricochet1.row,bulletHeight,bulletWidth),
            angle: everythingObject.ricochet1.angle
        },
        {
            x:calculateXCenter(everythingObject.ricochet2.column,bulletHeight,bulletWidth),
            y:calculateYCenter(everythingObject.ricochet2.row,bulletHeight,bulletWidth),
            angle: everythingObject.ricochet2.angle
        }
    ]

    let semiRicochets = [
        {
            x:calculateXCenter(everythingObject.semiRicochet1.column,bulletHeight,bulletWidth),
            y:calculateYCenter(everythingObject.semiRicochet1.row,bulletHeight,bulletWidth),
            angle: everythingObject.semiRicochet1.angle
        },
        {
            x:calculateXCenter(everythingObject.semiRicochet2.column,bulletHeight,bulletWidth),
            y:calculateYCenter(everythingObject.semiRicochet2.row,bulletHeight,bulletWidth),
            angle: everythingObject.semiRicochet2.angle
        }
    ]

    let absorbers = [
        {
            x: calculateXCenter(everythingObject.tank1.column,bulletHeight,bulletWidth),
            y: calculateYCenter(everythingObject.tank1.row,bulletHeight,bulletWidth)
        },
        {
            x: calculateXCenter(everythingObject.tank2.column,bulletHeight,bulletWidth),
            y: calculateYCenter(everythingObject.tank2.row,bulletHeight,bulletWidth)
        }
    ]

    let titans = [
        {
            x: calculateXCenter(everythingObject.titan1.column,bulletHeight,bulletWidth),
            y: calculateYCenter(everythingObject.titan1.row,bulletHeight,bulletWidth),
            temp:1
        },
        {
            x: calculateXCenter(everythingObject.titan2.column,bulletHeight,bulletWidth),
            y: calculateYCenter(everythingObject.titan2.row,bulletHeight,bulletWidth),
            temp:2
        } 
    ]

    rotatableobject = [semiRicochets,ricochets]

    if (f===1) {
        path = 'down';
    }
    else if ( f===2) {
        path= 'up';
    }


    request = setInterval(()=>{
        shoot(absorbers,titans,ricochets,semiRicochets);
    },refreshRate);
    shooting=1;
    clickBlocker.style.display = 'block';
}

function shoot(absorbers,titans,ricochets,semiRicochets) {
    const bullet = document.querySelector('.bullet');
    //console.log(interval);
    absorbers.forEach((absorber)=>{
        if ( x=== absorber.x && y === absorber.y) {
            console.log('satisfied2');
            clearInterval(request);
            clickBlocker.style.display = 'none';
            bullet.style.display = 'none'; 
            bullet.remove();
            shooting = 0;
            flag*=-1;
            gameEngine();
        }
    });

    titans.forEach((titan)=>{
        if ( x=== titan.x && y === titan.y) {
            console.log(x,y,titan.x,titan.y,'wow',titan.temp);
            clearInterval(request);
            clickBlocker.style.display = 'none';
            bullet.style.display = 'none';
            bullet.remove();
            shooting = 0;
            flag*=-1;
            gameEngine();
            handleWinWindow(titan.temp === 1?2:1);
        }
    });

    if(path === 'down') {
        y+=velocity;
        bullet.style.top = y + 'px';
        
        ricochets.forEach((ricochet,i)=>{
            console.log(x,y)
            console.log(ricochet.x, ricochet.y,i)
            if ( x=== ricochet.x && y === ricochet.y) {
                console.log('satisfied1');
                if(ricochet.angle === 0 || ricochet.angle%180 === 0) {
                    path = 'left';
                }
                else {
                    path = 'right';
                }
            }
        });

        semiRicochets.forEach((semiRicochet,i)=>{
            if ( x=== semiRicochet.x && y === semiRicochet.y) {
                if(semiRicochet.angle === 0) {
                    path = 'right';
    
                }
                else if (semiRicochet.angle === -90) {
                    path = 'left';
    
                }
                else {
                    clearInterval(request);
                    clickBlocker.style.display = 'none';
                    bullet.style.display = 'none';
                    bullet.remove();
                    shooting = 0;
                    flag*=-1;
                    gameEngine();
                }
            }
        });
        
    }
    else if(path === 'up') {
        y-=velocity;
        bullet.style.top = y + 'px';

        ricochets.forEach((ricochet,i)=>{
            if ( x=== ricochet.x && y === ricochet.y) {
                if(ricochet.angle === 0 || ricochet.angle%180 === 0) {
                    path = 'right';
                }
                else {
                    path = 'left';
                }
            }
        });

        semiRicochets.forEach((semiRicochet,i)=>{
            if ( x=== semiRicochet.x && y === semiRicochet.y) {
                if(semiRicochet.angle === 180) {
                    path = 'left';
    
                }
                else if (semiRicochet.angle === 90) {
                    path = 'right';
    
                }
                else {
                    clearInterval(request);
                    clickBlocker.style.display = 'none';
                    bullet.style.display = 'none';
                    bullet.remove();
                    shooting = 0;
                    flag*=-1;
                    gameEngine();
                }
            }
        });

    }
    else if (path === 'right') {
        x+=velocity;
        bullet.style.left = x +'px';

        ricochets.forEach((ricochet,i)=>{
            if ( x=== ricochet.x && y === ricochet.y) {
                if(ricochet.angle === 0 || ricochet.angle%180 === 0) {
                    path = 'up';
                }
                else {
                    path = 'down';
                }

            }
        });

        semiRicochets.forEach((semiRicochet,i)=>{
            if ( x=== semiRicochet.x && y === semiRicochet.y) {
                if(semiRicochet.angle === 180) {
                    path = 'down';
    
                }
                else if (semiRicochet.angle === -90) {
                    path = 'up';
    
                }
                else {
                    clearInterval(request);
                    clickBlocker.style.display = 'none';
                    bullet.style.display = 'none';
                    bullet.remove();
                    shooting = 0;
                    flag*=-1;
                    gameEngine();
                }
            }
        });

    }
    else if (path === 'left') {
        x-=velocity;
        bullet.style.left = x +'px';

        ricochets.forEach((ricochet,i)=>{
            if ( x=== ricochet.x && y === ricochet.y) {
                if(ricochet.angle === 0 || ricochet.angle%180 === 0) {
                    path = 'down';
                }
                else {
                    path = 'up';
                }

            }
        });

        semiRicochets.forEach((semiRicochet,i)=>{
            if ( x=== semiRicochet.x && y === semiRicochet.y) {
                if(semiRicochet.angle === 0) {
                    path = 'up';
    
                }
                else if (semiRicochet.angle === 90) {
                    path = 'down';
    
                }
                else {
                    clearInterval(request);
                    clickBlocker.style.display = 'none';
                    bullet.style.display = 'none';
                    bullet.remove();
                    shooting = 0;
                    flag*=-1;
                    gameEngine();
                }
            }
        });


    }

    if(y>=boardBorderBottom || y<=boardBorderTop || x<=boardBorderLeft|| x>= boardBorderRight) {
        clearInterval(request);
        clickBlocker.style.display = 'none';
        bullet.style.display = 'none';
        bullet.remove();
        shooting = 0;
        flag*=-1;
        gameEngine();
    }
    console.log('welcome');
    

}

function handleWinWindow(f) {
    //note that here f is which player won and not which player the ball was struck on

    if(f === 1) {
        document.querySelector('.winner-image').innerHTML = everythingObject.titan1.imgTag;
    }
    else if (f === 2) {
        document.querySelector('.winner-image').innerHTML = everythingObject.titan2.imgTag;
        document.querySelector('.winner-image img').style.transform = `rotate(180deg)`
        document.querySelector('.pop-up').style.background = 'rgba(245, 87, 130,0.467)';
    }

    clickBlocker.style.backgroundColor = 'rgba(0, 0, 0,0.5)';
    clickBlocker.style.display = 'block';
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.close-button').addEventListener('click',()=>{
        handleResetButton();
    });

    clearInterval(timerRequest);


}

function handleResetButton() {
    localStorage.removeItem('everything');
    localStorage.removeItem('flag');
    localStorage.removeItem('piecePosition');
    localStorage.removeItem('timerList');
    location.reload();
}

function formatTwoDigits(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

function handleTimer() {
    let shootingInclude = document.querySelector('.switch input').checked;
    document.querySelector('.player-1-timer span').innerHTML = `00:${formatTwoDigits(Math.floor(timerList[0]/60))}:${formatTwoDigits(timerList[0]%60)}`;
    document.querySelector('.player-2-timer span').innerHTML = `00:${formatTwoDigits(Math.floor(timerList[1]/60))}:${formatTwoDigits(timerList[1]%60)}`;

    if(shootingInclude) {
        if(flag===1) {
            timerList[0]-=1;
        }
        else if (flag === -1) {
            timerList[1]-=1;
        }
    }
    else {
        if(!shooting) {
            if(flag===1) {
                timerList[0]-=1;
            }
            else if (flag === -1) {
                timerList[1] -=1;
            }
        }
    }

    if(timerList[0] ===0) {
        handleWinWindow(2);
    }
    else if (timerList[1] === 0) {
        handleWinWindow(1);
    }
    localStorage.setItem('timerList',JSON.stringify(timerList));

}

function runTimer() {
    document.removeEventListener('click',runTimer);
    timerRequest = setInterval(handleTimer,1000);
}

function calculateXCenter(box,height, width) {
    const marginLeft = 30;
    const boxSize = 64;
    const gap = 4;
    let left = marginLeft - gap- (width/2);

    for(i=0;i<=box;i++){
        left+=(gap+boxSize);
    }
    return left-(boxSize/2);

}

function calculateYCenter(box,height,width) {
    const marginTop = 15;
    const boxSize = 64;
    const gap = 4;

    let top = marginTop - gap- (height/2);

    for(i=0;i<=box;i++){
        top+=(gap+boxSize);
    }
    return top-(boxSize/2);
}

function handlePauseButton() {
    clickBlocker.style.display = 'block';
    clickBlocker.style.backgroundColor = 'rgba(0,0,0,0.5)';
    clearInterval(request);
    clearInterval(timerRequest);
    let pauseButton = document.querySelector('.js-pause-button');
    pauseButton.removeEventListener('click',handlePauseButton)
    
    pauseButton.classList.add('js-continue-button');
    pauseButton.innerHTML = 'Continue';
    pauseButton.classList.remove('js-pause-button');
    document.querySelector('.js-continue-button').addEventListener('click',handleContinueButton);
    const bullet = document.querySelector('.bullet').remove();
}

function handleContinueButton() {
    clickBlocker.style.display = 'none';
    clickBlocker.style.backgroundColor = 'rgba(0,0,0,0)';
    runTimer();

    let continueButton = document.querySelector('.js-continue-button');

    continueButton.removeEventListener('click',handleContinueButton)
    continueButton.classList.add('js-pause-button');
    continueButton.innerHTML = 'Pause';
    continueButton.classList.remove('js-continue-button');
    document.querySelector('.js-pause-button').addEventListener('click', handlePauseButton);
    if(shooting===1) {
        if(flag===1) {
            handleBulletShoot(everythingObject.cannon1,1);
            console.log('test4');
        }
        else if (flag === -1) {
            handleBulletShoot(everythingObject.cannon2,2);
        }
    }

}


/* general variables to be declared over here */

const absorbAudio = new Audio('../Audio/absorb-audio.wav');
const gameOverAudio = new Audio('../Audio/game-over-audio.wav');
const reflectAudio = new Audio('../Audio/reflect-audio.wav');
const shooterAudio = new Audio('../Audio/shooter-audio.wav');
const tabChangingAudio = new Audio('../Audio/tab-changing-audio.wav');

const gameBoard = document.querySelector('.game-board');
const playerDisplay = document.querySelector('.player');
const clickBlocker = document.querySelector('.click-blocker');

let flagTemp = localStorage.getItem('flag');
let flag;
if(flagTemp == null ) {
    flag = 1;
}
else {
    flag = parseInt(flagTemp);
}
//console.log(flagTemp);
let refreshRate = 5;
let request;
let velocity = 4;
let path;
let x,y;
let shooting = 0;
let firstShootStop = 0;

let timerList;
var timerListTemp = localStorage.getItem('timerList');

if (timerListTemp == null ) {
    timerList = [600,600];
}
else {
    timerList = JSON.parse(timerListTemp);
}

let timerRequest;


const boardBorderLeft = calculateXCenter(0,15,15) - 30;
const boardBorderRight = calculateXCenter(7,15,15) + 30;
const boardBorderTop = calculateYCenter(0,15,15) - 15;
const boardBorderBottom = calculateYCenter(7,15,15) + 15;
console.log(boardBorderBottom,boardBorderLeft,boardBorderRight,boardBorderTop)

document.querySelector('.reset-button').addEventListener('click',handleResetButton)

/* general variables to be declared over here */

//--------------------------------


/* general functions to be called over here */
document.querySelector('.player-1-timer span').innerHTML = `00:${formatTwoDigits(Math.floor(timerList[0]/60))}:${formatTwoDigits(timerList[0]%60)}`;
document.querySelector('.player-2-timer span').innerHTML = `00:${formatTwoDigits(Math.floor(timerList[1]/60))}:${formatTwoDigits(timerList[1]%60)}`;
document.addEventListener('click',runTimer);
gameEngine();

document.querySelector('.js-pause-button').addEventListener('click',handlePauseButton)


// let test = setInterval(()=>{
//     console.log(flag);
// },500)

/* general functions to be called over here */