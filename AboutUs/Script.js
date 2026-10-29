let currentMember = 1;

function showNextMember() {
    hideCurrentMember();
    currentMember = (currentMember % 3) + 1;
    showCurrentMember();
}

function showPreviousMember() {
    hideCurrentMember();
    currentMember = (currentMember - 2 + 3) % 3 + 1;
    showCurrentMember();
}

function hideCurrentMember() {
    document.getElementById(`teamMember${currentMember}`).style.display = "none";
}

function showCurrentMember() {
    document.getElementById(`teamMember${currentMember}`).style.display = "block";
}
