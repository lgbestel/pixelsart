let colorPalette = document.getElementById('color-palette');
let colors = document.querySelectorAll('.color');
let squareSize = '20px';

for(let i = 0; i < colors.length; i +=1) {
    colors[i].style.height = squareSize;
    colors[i].style.width = squareSize;
    colors[i].style.display = 'inline-block';
}