let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hbtn3 = document.getElementById("hbtn3-hide");
let homeScoreResult = 0
let guestScoreResult = 0

function hincrementOne() {
    homeScoreResult += 1
    homeScore.textContent = homeScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow= "none"
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow= "none"
    }

}

function hincrementTwo() {
    homeScoreResult += 2
    homeScore.textContent = homeScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow= "none"
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow= "none"
    }

}
function hincrementThree() {
    homeScoreResult += 3
    homeScore.textContent = homeScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow= "none"
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow= "none"
    }

}

function gincrementOne() {
    guestScoreResult += 1
    guestScore.textContent = guestScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow= "none"
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow= "none"
    }

}

function gincrementTwo() {
    guestScoreResult += 2
    guestScore.textContent = guestScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow= "none"
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow= "none"
    }

}

function gincrementThree() {
    guestScoreResult += 3
    guestScore.textContent = guestScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow= "none"
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow= "none"
    }

}
function reset(){
    homeScoreResult=0
    guestScoreResult= 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}
function hdecrementOne() {
    homeScoreResult -= 1
    homeScore.textContent = homeScoreResult

}
function hindecrementTwo() {
    homeScoreResult -= 2
    homeScore.textContent = homeScoreResult

}
function hdecrementThree() {
    homeScoreResult -= 3
    homeScore.textContent = homeScoreResult
    if(homeScoreResult<=0){
        hbtn3.style.display = "none";
    }else{
        hbtn3.style.display="block";
    }

}
function gdecrementOne() {
    guestScoreResult -= 1
    guestScore.textContent = guestScoreResult
}
function gindecrementTwo() {
    guestScoreResult -= 2
    guestScore.textContent = guestScoreResult

}
function gdecrementThree() {
    guestScoreResult -= 3
    guestScore.textContent = guestScoreResult

}






// Javascript Alternative Code

// let homeScore = document.getElementById("home-score");
// let guestScore = document.getElementById("guest-score");
// let homeScoreResult = 0;
// let guestScoreResult = 0;

// document.getElementById("home-increment-one").addEventListener("click", function() {
//     homeScoreResult += 1;
//     homeScore.textContent = homeScoreResult;
// });

// document.getElementById("home-increment-two").addEventListener("click", function() {
//     homeScoreResult += 2;
//     homeScore.textContent = homeScoreResult;
// });

// document.getElementById("home-increment-three").addEventListener("click", function() {
//     homeScoreResult += 3;
//     homeScore.textContent = homeScoreResult;
// });

// document.getElementById("guest-increment-one").addEventListener("click", function() {
//     guestScoreResult += 1;
//     guestScore.textContent = guestScoreResult;
// });

// document.getElementById("guest-increment-two").addEventListener("click", function() {
//     guestScoreResult += 2;
//     guestScore.textContent = guestScoreResult;
// });

// document.getElementById("guest-increment-three").addEventListener("click", function() {
//     guestScoreResult += 3;
//     guestScore.textContent = guestScoreResult;
// });




// Professional and Optimized Javascript ConvolverNode

// const homeScore = document.getElementById("home-score");
// const guestScore = document.getElementById("guest-score");
// let homeScoreResult = 0;
// let guestScoreResult = 0;

// const updateScore = (element, score) => {
//     element.textContent = score;
// };

// const hincrement = (value) => {
//     homeScoreResult += value;
//     updateScore(homeScore, homeScoreResult);
// };

// const gincrement = (value) => {
//     guestScoreResult += value;
//     updateScore(guestScore, guestScoreResult);
// };

// document.querySelectorAll('.main button[onclick^="hincrement"]').forEach(button => {
//     button.addEventListener('click', () => {
//         hincrement(Number(button.textContent.trim()));
//     });
// });

// document.querySelectorAll('.main button[onclick^="gincrement"]').forEach(button => {
//     button.addEventListener('click', () => {
//         gincrement(Number(button.textContent.trim()));
//     });
// });






























// Jquery Version


// let homeScore = $("#home-score");
// let guestScore = $("#guest-score");
// let homeScoreResult = 0;
// let guestScoreResult = 0;

// $('.hincrement-one').click(function() {
//     homeScoreResult += 1;
//     homeScore.text(homeScoreResult);
// });

// $('.hincrement-two').click(function() {
//     homeScoreResult += 2;
//     homeScore.text(homeScoreResult);
// });

// $('.hincrement-three').click(function() {
//     homeScoreResult += 3;
//     homeScore.text(homeScoreResult);
// });

// $('.gincrement-one').click(function() {
//     guestScoreResult += 1;
//     guestScore.text(guestScoreResult);
// });

// $('.gincrement-two').click(function() {
//     guestScoreResult += 2;
//     guestScore.text(guestScoreResult);
// });

// $('.gincrement-three').click(function() {
//     guestScoreResult += 3;
//     guestScore.text(guestScoreResult);
// });