const ball_1 = document.querySelector(".ball_1");
const ball_2 = document.querySelector(".ball_2");
const container = document.querySelector(".b_1");
const fieldHeight = container.clientHeight;
const fieldWidth = container.clientWidth;
const speed = 20;

const ballData1 = {
    yCord: 0,
    xCord: 0,
    player: ball_1
};

const ballDataCenter1 = {
    xCord: ballData1.player.offsetLeft + ballData1.player.clientWidth / 2,
};

const ballData2 = {
    yCord: 0,
    xCord: fieldWidth - ball_2.clientWidth,
    player: ball_2
};
function gameOver() {
    const gameoverimage = document.querySelector(".gameOveer")
    gameoverimage.style.display = "flex"
}
document.addEventListener("keydown", game);
function game (event) {
    switch (event.code) {
        case "KeyW":
            goUp(ballData1);
            break;
        case "KeyS":
            goDown(ballData1);
            break;
        case "KeyA":
            goLeft(ballData1);
            break;
        case "KeyD":
            goRight(ballData1);
            break;
        case "ArrowUp":
            goUp(ballData2);
            break;
        case "ArrowDown":
            goDown(ballData2);
            break;
        case "ArrowLeft":
            goLeft(ballData2);
            break;
        case "ArrowRight":
            goRight(ballData2);
            break;
    }
}

function goUp(ballData) {
    if (ballData.yCord > 0) {
        ballData.yCord -= speed;
        ballData.player.style.top = ballData.yCord + "px";
        updateCenter(ballData);
    }
}

function goLeft(ballData) {
    if (ballData.xCord > 0) {
        ballData.xCord -= speed;
        ballData.player.style.left = ballData.xCord + "px";
        updateCenter(ballData);
    }
}

function goDown(ballData) {
    if (ballData.yCord <= fieldHeight - ballData.player.clientHeight) {
        ballData.yCord += speed;
        ballData.player.style.top = ballData.yCord + "px";
        updateCenter(ballData);
    }
}

function goRight(ballData) {
    if (ballData.xCord <= fieldWidth - ballData.player.clientWidth) {
        ballData.xCord += speed;
        ballData.player.style.left = ballData.xCord + "px";
        updateCenter(ballData);
    }
}

function updateCenter(ballData) {
    ballDataCenter1.xCord = ballData.player.offsetLeft + ballData.player.clientWidth / 2;
    let a = (ballData2.player.offsetTop - ballData1.player.offsetTop) ** 2;
    let b = (ballData2.player.offsetLeft - ballData1.player.offsetLeft) ** 2;
    let c = Math.sqrt(a + b);

    if (c - 20 < ballData1.player.clientWidth / 2 + ballData2.player.clientWidth / 2) {
        gameOver();
        document.removeEventListener("keydown", game)
    }
}
function reload() {
    location.reload()
}
