var boxOneSelected, boxThreeSelected, boxTwoSelected, boxFourSelected, xpos, ypos, gamePlaying, circleSelected, oriX, oriY, Id, speedX, speedY, YspeedAcceleration, XspeedAcceleration;
gamePlaying = false;

boxOneSelected = document.getElementById("box-1");
boxThreeSelected = document.getElementById("box-3");
boxTwoSelected = document.getElementById("box-2");
boxFourSelected = document.getElementById("box-4");
extensionThreeSelected = document.getElementById("extension-3")
extensionThreeTwoSelected = document.getElementById("extension-3-2")
extensionOneSelected = document.getElementById("extension-1")
extensionOneTwoSelected = document.getElementById("extension-1-2")
extensionTwoSelected = document.getElementById("extension-2")
extensionTwoTwoSelected = document.getElementById("extension-2-2")
extensionFourSelected = document.getElementById("extension-4")
extensionFourTwoSelected = document.getElementById("extension-4-2")

circleSelected = document.getElementById("circle");

function move() {
    if (gamePlaying) {
        Id = setInterval(frame, 1000 / 60)
        oriX = 215;
        oriY = 270;
        speedX = 2;
        speedY = 2;
        YspeedAcceleration = 0.2;
        XspeedAcceleration = 0.2;

        function frame() {
            oriX += speedX;
            oriY += speedY;
            circleSelected.style.left = oriX + "px";
            circleSelected.style.top = oriY + "px";
            /***********************************
             * The problem is the endGame() function is always running because the ball is always in between the oriY and oriX Seee heereee  \/ \/ \/ \/ \/ \/ \/ \/ \/ I know you won't understand but try.
             */
            if (((oriY >= 543 + 2)) || (oriY <= (2 + 30))) {
                if (oriX >= (xpos - 1125) && (oriX + 25) <= (xpos - 1125 + 200)) {
                    speedY += YspeedAcceleration;
                    speedY = speedY * -1;
                    YspeedAcceleration = YspeedAcceleration * -1;
                } else {
                    speedX = 0;
                    speedY = 0;
                    YspeedAcceleration = 0;
                    XspeedAcceleration = 0;
                    clearInterval(Id);
                    endGame()
                }

            }
            if ((oriX >= 543 + 2) || (oriX <= (2 + 30))) {
                if ((oriY >= (ypos - 236) && (oriY + 25) <= (ypos - 236 + 200))) {
                    speedX += XspeedAcceleration;
                    speedX = speedX * -1;
                    XspeedAcceleration = XspeedAcceleration * -1;
                } else {
                    speedX = 0;
                    speedY = 0;
                    YspeedAcceleration = 0;
                    XspeedAcceleration = 0;
                    clearInterval(Id);
                    endGame()
                }

            }


        }

    }


}


function init() {
    gamePlaying = true;
    document.getElementById("newGame").style.display = "none";
    boxOneSelected.style.left = (215);
    boxThreeSelected.style.left = (215);
    boxTwoSelected.style.top = (270);
    boxFourSelected.style.top = (270);
    move();
}


function findScreenCoords(mouseEvent) {
    if (gamePlaying) {
        if (mouseEvent) {
            xpos = window.event.screenX;
            ypos = window.event.screenY;
        }

        boxOneSelected.style.left = (xpos - 1125);
        boxThreeSelected.style.left = (xpos - 1125);
        boxTwoSelected.style.top = (ypos - 140);
        boxFourSelected.style.top = (ypos - 140);
        
        
        extensionThreeSelected.style.left = (xpos - 1125 - 534 );
        extensionOneSelected.style.left = (xpos - 1125 - 534 );
        extensionThreeTwoSelected.style.left = (xpos - 1125 + 200 -16);
        extensionOneTwoSelected.style.left = (xpos - 1125 + 200 -16);
        extensionTwoSelected.style.top = (ypos - 340 + 550)
        extensionTwoTwoSelected.style.top = (ypos - 505 -5 )
        extensionFourSelected.style.top = (ypos - 340 + 550)
        extensionFourTwoSelected.style.top = (ypos - 505 -5 )
    }






}

function endGame() {
    if (gamePlaying) {
        document.getElementById("newGame").style.display = "block";
        document.getElementById("newGame").textContent = "You Lost, New Game?";
        gamePlaying = false;

    }




}



document.getElementById("newGame").addEventListener("click", init);

document.getElementById("screenBox").onmousemove = findScreenCoords;
