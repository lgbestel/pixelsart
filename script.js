function createBlack () {

    let colorPalette = document.querySelector('#color-palette');
    let blackDiv = document.createElement('div');
    blackDiv.className = 'color';
    blackDiv.id = 'black';
    blackDiv.style.backgroundColor = 'black';
    blackDiv.style.border = '1px solid black';
    colorPalette.prepend(blackDiv);  

} createBlack ();

function squarePalette () {

    let colors = document.querySelectorAll('.color');
    let squareSize = '20px';

    for(let i = 0; i < colors.length; i +=1) {
        colors[i].style.height = squareSize;
        colors[i].style.width = squareSize;
        colors[i].style.display = 'inline-block';
    }
} squarePalette ();