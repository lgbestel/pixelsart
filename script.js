const colorPalette = document.querySelector('#color-palette');
const blackDiv = document.createElement('div');
blackDiv.className = 'color';
blackDiv.id = 'black';
blackDiv.style.backgroundColor = 'black';
blackDiv.style.border = '1px solid black';
colorPalette.prepend(blackDiv);

const blackSquare = document.getElementById('black');
blackSquare.classList.add('selected');

const colors = document.querySelectorAll('.color');
const squareSize = '40px';

for (let i = 0; i < colors.length; i += 1) {
  colors[i].style.height = squareSize;
  colors[i].style.width = squareSize;
  colors[i].style.display = 'inline-block';
}

function createPixelBoard(lines, columns) {
  for (let icol = 0; icol < lines; icol += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const createPixelLine = document.createElement('div');
    createPixelLine.className = 'pixel-line';
    pixelBoard.appendChild(createPixelLine);
    createPixelLine.style.width = 'auto';
    for (let iline = 0; iline < columns; iline += 1) {
      const pixelBoardLine = document.querySelectorAll('.pixel-line');
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel';
      pixelBoardLine[icol].appendChild(createPixel);
      createPixel.style.backgroundColor = 'white';
      createPixel.style.border = '1px solid black';
      createPixel.style.height = '40px';
      createPixel.style.width = '40px';
      createPixel.style.display = 'inline-block';
    }
  }
}
createPixelBoard(5, 5);

function selectColor() {
  colorPalette.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
} selectColor();

function paint() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', (event) => {
      const selectedElement = document.querySelector('.selected');
      const selectedColor = window.getComputedStyle(selectedElement);
      const cssColor = selectedColor.getPropertyValue('background-color');
      event.target.style.backgroundColor = cssColor;
    });
  }
}
paint();

function clearButton() {
  const buttonContainer = document.querySelector('#button-container');
  const createClearButton = document.createElement('button');
  createClearButton.id = 'clear-board';
  createClearButton.innerText = 'Limpar';
  buttonContainer.appendChild(createClearButton);
} clearButton();

function clearPixel() {
  const clearBtn = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');
  clearBtn.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
} clearPixel();

const buttonContainer = document.querySelector('#button-container');
const inputBox = document.createElement('input');
inputBox.id = 'board-size';
inputBox.type = 'number';
inputBox.min = '1';
inputBox.max = '50';
buttonContainer.appendChild(inputBox);

const btnInputBox = document.createElement('button');
btnInputBox.id = 'generate-board';
btnInputBox.innerText = 'VQV';
buttonContainer.appendChild(btnInputBox);

const inputBoxBtn = document.getElementById('generate-board');

const handleBoardSize = () => {
  inputBoxBtn.addEventListener('click', () => {
    let inputBoxValue = document.getElementById('board-size').value;
    if (inputBoxValue <= 5 && inputBoxValue !== '') {
      inputBoxValue = 5;
    }
    if (inputBoxValue >= 50) {
      inputBoxValue = 50;
    }
    if (inputBoxValue === '') {
      alert('Board inválido!');
    } else {
      const pixelBoard = document.getElementById('pixel-board');
      pixelBoard.innerHTML = '';
      createPixelBoard(inputBoxValue, inputBoxValue);
      paint();
      clearPixel();
    }
  });
};
handleBoardSize();

const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const randomNumberR = Math.floor(Math.random() * 256);
const randomNumberG = Math.floor(Math.random() * 256);
const randomNumberB = Math.floor(Math.random() * 256);
const randomColorR = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`;
const randomColorG = `rgb(${randomNumberB},${randomNumberG},${randomNumberR})`;
const randomColorB = `rgb(${randomNumberG},${randomNumberR},${randomNumberB})`;

red.style.backgroundColor = randomColorR;
blue.style.backgroundColor = randomColorB;
green.style.backgroundColor = randomColorG;
