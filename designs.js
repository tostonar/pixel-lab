function respondToTheClick() {
  let choice = color.value;
  this.style.backgroundColor = `${choice}`;
}

function makeGrid(height, width) {
  for (var i = 0; i < height; i++) {
    const row = document.createElement('tr');

    for (var j = 0; j < width; j++) {
      const cell = document.createElement('td');

      row.appendChild(cell);
      cell.addEventListener('click', respondToTheClick);
    }
    pixelCanvas.appendChild(row);
  }
}

// Select color input
const color = document.querySelector('#colorPicker');

// Select design Canvas
const pixelCanvas = document.querySelector('#pixelCanvas');

// Select buttons
const button = document.querySelector('input[type="submit"]');
const clearButton = document.querySelector('#clear');

// When size is submitted by the user, call makeGrid()
button.addEventListener('click', function(evt) {
  evt.preventDefault();
  // if you want the grid to be automatically replaced with a new one each time you hit submit
  deleteGrid();
  // Select size input
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;

  makeGrid(height, width);
});


// delete Grid

function deleteGrid() {
  pixelCanvas.innerHTML = "";
}

// Clear the grid
function clearGrid() {
  const allCells = document.querySelectorAll('td');
  allCells.forEach(
    function(currentValue, currentIndex, listObj) {
      currentValue.setAttribute('style', 'background-color: white;');
    }
  );
}

// hook clear button to clearGrid function
clearButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  clearGrid();
});
