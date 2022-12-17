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
promptForSizeOfGrid.value = "30";
promptForSizeOfGrid.addEventListener('change', () => {
    showNumOfSquares.textContent = `Size: ${promptForSizeOfGrid.value}`;
    createGrid();
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
function createGrid() {
    container.innerHTML = '';
    //listen for changes in color picker, if no user input use default color
    let color = colorPicker.value;
    colorPicker.addEventListener('input', () => {
        color = colorPicker.value;
    });
    //use the css variable "--cols" and update it dynamically to populate grid
    let squares = promptForSizeOfGrid.value;
    container.style.setProperty("--cols", squares);
    //create grid
    for (let i = 1; i < (squares * squares) + 1; i++) {
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