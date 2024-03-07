// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play-button');

    // Add click event listener to the play button
    playButton.addEventListener('click', function () {
        window.location.href = 'game.html';
    });
});