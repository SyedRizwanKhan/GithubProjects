let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let btnHide1 = document.getElementById("btn-hide1");
let btnHide2 = document.getElementById("btn-hide2");
let btnHide3 = document.getElementById("btn-hide3");
let btnHide4 = document.getElementById("btn-hide4");
let btnHide5 = document.getElementById("btn-hide5");
let btnHide6 = document.getElementById("btn-hide6");
let homeScoreResult = 0
let guestScoreResult = 0

function hincrementOne() {
    homeScoreResult += 1
    homeScore.textContent = homeScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow = "none"
        if (homeScoreResult > 0) {
            btnHide1.style.opacity = "1";
            btnHide1.style.pointerEvents = "initial"
        }
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow = "none"
    }

}

function hincrementTwo() {
    homeScoreResult += 2
    homeScore.textContent = homeScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow = "none"
        if (homeScoreResult > 0) {
            btnHide2.style.opacity = "1";
            btnHide2.style.pointerEvents = "initial"
        }
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow = "none"
    }

}
function hincrementThree() {
    homeScoreResult += 3
    homeScore.textContent = homeScoreResult
    if (homeScoreResult > guestScoreResult) {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow = "none"
        if (homeScoreResult > 0) {
            btnHide3.style.opacity = "1";
            btnHide3.style.pointerEvents = "initial"
        }
    } else {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow = "none"
    }

}

function gincrementOne() {
    guestScoreResult += 1
    guestScore.textContent = guestScoreResult
    if (guestScoreResult > homeScoreResult) {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow = "none"
        if (guestScoreResult > 0) {
            btnHide4.style.opacity = "1";
            btnHide4.style.pointerEvents = "initial"
        }
    } else {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow = "none"
    }

}

function gincrementTwo() {
    guestScoreResult += 2
    guestScore.textContent = guestScoreResult
    if (guestScoreResult > homeScoreResult) {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow = "none"
        if (guestScoreResult > 0) {
            btnHide5.style.opacity = "1";
            btnHide5.style.pointerEvents = "initial"
        }
    } else {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow = "none"
    }

}

function gincrementThree() {
    guestScoreResult += 3
    guestScore.textContent = guestScoreResult
    if (guestScoreResult > homeScoreResult) {
        guestScore.style.boxShadow = "0 0 20px #fff"
        homeScore.style.boxShadow = "none"
        if (guestScoreResult > 0) {
            btnHide6.style.opacity = "1";
            btnHide6.style.pointerEvents = "initial"
        }
    } else {
        homeScore.style.boxShadow = "0 0 20px #fff"
        guestScore.style.boxShadow = "none"
    }

}
function reset() {
    homeScoreResult = 0
    guestScoreResult = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}
function hdecrementOne() {
    if (homeScoreResult <= 0) {
        btnHide1.style.opacity = "0.5";
        btnHide1.style.pointerEvents = "none"
    }
    else {
        homeScoreResult -= 1
        homeScore.textContent = homeScoreResult
        if (homeScoreResult < guestScoreResult) {
            guestScore.style.boxShadow = "0 0 20px #fff"
            homeScore.style.boxShadow = "none"
        }
    }
}
function hdecrementTwo() {
    if (homeScoreResult <= 0) {
        btnHide2.style.opacity = "0.5";
        btnHide2.style.pointerEvents = "none"
    }
    else {
        homeScoreResult -= 2
        homeScore.textContent = homeScoreResult
        if (homeScoreResult < guestScoreResult) {
            guestScore.style.boxShadow = "0 0 20px #fff"
            homeScore.style.boxShadow = "none"
        }
    }
}
function hdecrementThree() {

    if (homeScoreResult <= 0) {
        btnHide3.style.opacity = "0.5";
        btnHide3.style.pointerEvents = "none"
    }
    else {
        homeScoreResult -= 3
        homeScore.textContent = homeScoreResult
        if (homeScoreResult < guestScoreResult) {
            guestScore.style.boxShadow = "0 0 20px #fff"
            homeScore.style.boxShadow = "none"
        }
    }
}
function gdecrementOne() {
    if (guestScoreResult <= 0) {
        btnHide4.style.opacity = "0.5";
        btnHide4.style.pointerEvents = "none"
    }
    else {
        guestScoreResult -= 1
        guestScore.textContent = guestScoreResult
        if (guestScoreResult < homeScoreResult) {
            homeScore.style.boxShadow = "0 0 20px #fff"
            guestScore.style.boxShadow = "none"
        }
    }
}
function gdecrementTwo() {
    if (guestScoreResult <= 0) {
        btnHide5.style.opacity = "0.5";
        btnHide5.style.pointerEvents = "none"
    }
    else {
        guestScoreResult -= 2
        guestScore.textContent = guestScoreResult
        if (guestScoreResult < homeScoreResult) {
            homeScore.style.boxShadow = "0 0 20px #fff"
            guestScore.style.boxShadow = "none"
        }
    }
}
function gdecrementThree() {
    if (guestScoreResult <= 0) {
        btnHide6.style.opacity = "0.5";
        btnHide6.style.pointerEvents = "none"
    }
    else {
        guestScoreResult -= 3
        guestScore.textContent = guestScoreResult
        if (guestScoreResult < homeScoreResult) {
            homeScore.style.boxShadow = "0 0 20px #fff"
            guestScore.style.boxShadow = "none"
        }
    }
}