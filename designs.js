function respondToTheClick() {
  let color = document.querySelector('#colorPicker').value;

  this.style.backgroundColor = `${color}`;

}

function makeGrid(height, width) {
  for (var i = 0; i < height; i++) {
    let row = document.createElement('tr');
    for (var j = 0; j < width; j++) {
      const cell = document.createElement('td');
      cell.addEventListener('click', respondToTheClick);
      row.appendChild(cell);
    }
    document.querySelector('table').appendChild(row);
  }
}


// Select color input
let color = document.querySelector('#colorPicker').value;


// Select button
const button = document.querySelector('input[type="submit"]');
const deleteButton = document.querySelector('#delete');
const clearButton = document.querySelector('#clear');

// When size is submitted by the user, call makeGrid()
button.addEventListener('click', function(evt) {
  evt.preventDefault();
  // if you want the grid to be automatically replaced with a new one each time you hit submit
  // deleteGrid();
  // Select size input
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;

  makeGrid(height, width);
});


// delete Grid
const designHeading = document.querySelector('#designHeading');
const htmlTextToAdd = '<table id="pixelCanvas"></table>';
function deleteGrid() {
  document.querySelector('table').remove();
  designHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
}

// hook deleteButton to deleteGrid function
deleteButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  deleteGrid();
});

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
