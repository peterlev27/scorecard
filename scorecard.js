let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePts = 0
let guestPts = 0

function addPointsHome1() {
    homePts += 1
    homeScore.textContent = homePts
}

function addPointsHome2() {
    homePts += 2
    homeScore.textContent = homePts
}

function addPointsHome3() {
    homePts += 3
    homeScore.textContent = homePts
}

function addPointsGuest1() {
    guestPts += 1
    guestScore.textContent = guestPts
}

function addPointsGuest2() {
    guestPts += 2
    guestScore.textContent = guestPts
}

function addPointsGuest3() {
    guestPts += 3
    guestScore.textContent = guestPts
}
