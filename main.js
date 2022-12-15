//grid related
const container = document.querySelector('#container');
const containerStyles = getComputedStyle(container);
//getComputedStyle returns size in ...px so need to convert to number before using 
const GRID_WIDTH = Number(containerStyles["max-width"].split("p")[0]);
const GRID_HEIGHT = Number(containerStyles["max-height"].split("p")[0]);

//button related
const buttonPanel = document.querySelector('#button-panel');
const promptForSizeOfGrid = document.createElement('button');
//color picker
const colorPicker = document.createElement('input');
colorPicker.type = "color";
colorPicker.id = "colorpicker";
colorPicker.value = "#610A0A";
buttonPanel.appendChild(colorPicker);
//change size
promptForSizeOfGrid.textContent = "Change grid";
promptForSizeOfGrid.classList.add('buttons');
promptForSizeOfGrid.addEventListener('click', () => {
    const userInput = prompt("How many squares?");
    if (userInput > 100) {
        alert("Too high, try something lower than 100.");
    } else {
        createGrid(userInput);
    };
});
buttonPanel.appendChild(promptForSizeOfGrid);
//reset
const resetGrid = document.createElement('button');
resetGrid.textContent = "Clear";
resetGrid.classList.add('buttons');
resetGrid.addEventListener('click', () => {
        createGrid();
});
buttonPanel.appendChild(resetGrid);

//create and update grid; perhaps can place drawing functionality in another function
function createGrid(squares=16) {
    container.innerHTML = '';
    colorPicker.value = "#610A0A";
    let color = "#610A0A";
    //listen for changes in default color options
    colorPicker.addEventListener('input', () => {
        color = colorPicker.value;
    })
    for (let i = 1; i < (squares * squares) + 1; i++) {
        const square = document.createElement('div');
        const squareWidth = GRID_WIDTH / squares;
        const squareHeight = GRID_HEIGHT / squares;
        //configure container to accept relevant number of squares
        container.setAttribute('style', `grid-template-columns: repeat(${squares}, 1fr)`); 
        //set square dimensions to fit container
        square.setAttribute('style', `width: ${squareWidth}px; height: ${squareHeight}px;`);
        container.appendChild(square);
    };
    //add listener on mouse click+move and change drawing color according to user inputs 
    const children = container.childNodes;
    children.forEach(child => child.addEventListener("mousemove", (e) => {
        //consider changing as which has been deprecated
        if (e.which == 1) {
            child.setAttribute('style', `background-color: ${color};`);
        };
    }));  
};
createGrid();