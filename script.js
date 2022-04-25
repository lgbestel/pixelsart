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

    for(let icol = 0; icol < lines; icol += 1) {
        let pixelBoard = document.querySelector('#pixel-board');
        let createPixelLine = document.createElement('div');
        createPixelLine.className = 'pixel-line';
        pixelBoard.appendChild(createPixelLine);
        // createPixelLine.style.backgroundColor = 'purple';
        // createPixelLine.style.border = '1px solid black';
        // createPixelLine.style.height = '40px';
        createPixelLine.style.width = 'auto';

        for (let iline = 0; iline < columns; iline += 1) {
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


// let black = document.getElementById('black');
// let red = document.getElementById('red');
// let blue = document.getElementById('blue');
// let green = document.getElementById('green');
// let yellow = document.getElementById('yellow');

function selectColor () {

    let colorPalette = document.querySelector('#color-palette');

    colorPalette.addEventListener('click', function(event){
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    })

} selectColor ();

function paint () {

    let pixels = document.querySelectorAll('.pixel');
    
    for(let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', function(event) {
            let selectedElement = document.querySelector('.selected');
            let selectedColor = window.getComputedStyle(selectedElement);
            let cssColor = selectedColor.getPropertyValue('background-color');
            event.target.style.backgroundColor = cssColor;
        })
    }
} paint ();

function clearButton () {

    let buttonContainer = document.querySelector('#button-container');
    let createClearButton = document.createElement('button');
    createClearButton.id = 'clear-board';
    createClearButton.innerText = 'Limpar';
    buttonContainer.appendChild(createClearButton);

} clearButton ();

function clearPixel () {
    let clearButton = document.querySelector('#clear-board');
    let pixels = document.querySelectorAll('.pixel');
    clearButton.addEventListener('click', function (){
        for (let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = 'white';
        }
    })
} clearPixel ();

function boardSize () {

    let buttonContainer = document.querySelector('#button-container');
    let inputBox = document.createElement('input');
    inputBox.id = 'board-size';
    inputBox.type = 'number';
    inputBox.min = '1';
    inputBox.max = '50';
    inputBox.value = '5';
    buttonContainer.appendChild(inputBox);
   
    let btnInputBox = document.createElement('button');
    btnInputBox.id = 'generate-board';
    btnInputBox.innerText = 'VQV';
    buttonContainer.appendChild(btnInputBox);

    // btnInputBox.addEventListener('click', function(
    //     if (inputBox.innerHTML = ""){
    //         alert('Board inválido!');
    //     } else {
    //         let pixelBoardSize = document.getElementById('board-size').value;  
    //         createPixelBoard (pixelBoardSize, pixelBoardSize);
    //     }

    // ))
    

} boardSize ();

