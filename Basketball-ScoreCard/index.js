let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeScoreResult = 0
let guestScoreResult = 0

function hincrementOne() {
    homeScoreResult += 1
    homeScore.textContent = homeScoreResult
}

function hincrementTwo() {
    homeScoreResult += 2
    homeScore.textContent = homeScoreResult
}
function hincrementThree() {
    homeScoreResult += 3
    homeScore.textContent = homeScoreResult
}

function gincrementOne() {
    guestScoreResult += 1
    guestScore.textContent = guestScoreResult
}

function gincrementTwo() {
    guestScoreResult += 2
    guestScore.textContent = guestScoreResult
}

function gincrementThree() {
    guestScoreResult += 3
    guestScore.textContent = guestScoreResult
}
// if(homeScoreResult>guestScoreResult){
//     homeScore.style.boxShadow="0 0 20px #f94f6dbf"
// }





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