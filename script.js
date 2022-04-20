function createBlack () {

    let colorPalette = document.querySelector('#color-palette');
    let blackDiv = document.createElement('div');
    blackDiv.className = 'color';
    blackDiv.id = 'black';
    blackDiv.style.backgroundColor = 'black';
    blackDiv.style.border = '1px solid black';
    colorPalette.prepend(blackDiv);  

} createBlack ();

function addSelectedClass () {

    let blackSquare = document.getElementById('black');
    blackSquare.classList.add('selected');

} addSelectedClass();

function squarePalette () {

    let colors = document.querySelectorAll('.color');
    let squareSize = '40px';

    for(let i = 0; i < colors.length; i +=1) {
        colors[i].style.height = squareSize;
        colors[i].style.width = squareSize;
        colors[i].style.display = 'inline-block';
    }
} squarePalette ();

function createPixelBoard (lines, columns) {

    for(let icol = 0; icol < columns; icol += 1) {
        let pixelBoard = document.querySelector('#pixel-board');
        let createPixelLine = document.createElement('div');
        createPixelLine.className = 'pixel-line';
        pixelBoard.appendChild(createPixelLine);
        // createPixelLine.style.backgroundColor = 'purple';
        // createPixelLine.style.border = '1px solid black';
        // createPixelLine.style.height = '40px';
        createPixelLine.style.width = 'auto';

        for (let iline = 0; iline < lines; iline += 1) {
            // let pixelBoard = document.querySelector('#pixel-board');
            let pixelBoardLine = document.querySelectorAll('.pixel-line');
            let createPixel = document.createElement('div');
            createPixel.className = 'pixel';
            pixelBoardLine[icol].appendChild(createPixel);
            createPixel.style.backgroundColor = 'white';
            createPixel.style.border = '1px solid black';
            createPixel.style.height = '40px';
            createPixel.style.width = '40px';
            createPixel.style.display = 'inline-block'
        }
    }
  
} createPixelBoard (5, 5);