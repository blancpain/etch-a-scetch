//grid related
const container = document.querySelector('#grid');
const numOfSquares = 30;
//buttons
const buttonPanel = document.querySelector('#button-panel');
//color picker
const colorPicker = document.createElement('input');
colorPicker.type = "color";
colorPicker.id = "colorpicker";
colorPicker.value = "#610a0a";
buttonPanel.appendChild(colorPicker);
//range slider to change size
const promptForSizeOfGrid = document.createElement('input');
promptForSizeOfGrid.type = "range";
promptForSizeOfGrid.min = "8";
promptForSizeOfGrid.max = "100";
promptForSizeOfGrid.id = "slider";
promptForSizeOfGrid.value = "50 x 50";
promptForSizeOfGrid.addEventListener('input', () => {
    //to get the first number in "value"
    const numOfSquares = parseInt(promptForSizeOfGrid.value.split(" ")[0]);
    showNumOfSquares.textContent = `Size: ${numOfSquares}`;
    createGrid(numOfSquares);
});
buttonPanel.appendChild(promptForSizeOfGrid);
//indicator for number of squares
const showNumOfSquares = document.createElement('div');
showNumOfSquares.textContent = `Size: ${numOfSquares}`;
buttonPanel.appendChild(showNumOfSquares);
//reset
const resetGrid = document.createElement('button');
resetGrid.textContent = "Clear";
resetGrid.classList.add('buttons');
resetGrid.addEventListener('click', () => {
        createGrid();
});
buttonPanel.appendChild(resetGrid);

//main function
function createGrid(squares=numOfSquares) {
    container.innerHTML = '';
    //listen for changes in default color options, if no user input yet use default color
    let color = colorPicker.value;
    colorPicker.addEventListener('input', () => {
        color = colorPicker.value;
    });
    //use the css variable "--cols" and update it dynamically to populate grid
    let numOfCols = squares;
    container.style.setProperty("--cols", numOfCols);
    //create grid
    for (let i = 1; i < (numOfCols * numOfCols) + 1; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
    };
    //add listener on mouse click+move and change drawing color according to user inputs 
    const children = container.childNodes;
    children.forEach(child => child.addEventListener("mousemove", (e) => {
        //consider changing as "which" has been deprecated
        if (e.which == 1) {
            child.setAttribute('style', `background-color: ${color};`);
        };
    }));  
};
createGrid();