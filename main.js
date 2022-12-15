//grid related
const container = document.querySelector('#container');
const containerStyles = getComputedStyle(container);
//getComputedStyle returns size in ...px so need to convert to number before using 
const GRID_WIDTH = Number(containerStyles["max-width"].split("p")[0]);
const GRID_HEIGHT = Number(containerStyles["max-height"].split("p")[0]);

function createGrid(squares=16) {
    container.innerHTML = '';
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
    //add listener on mousemove to draw in squares 
    const children = container.childNodes;
    children.forEach(child => child.addEventListener("mousemove", draw));
}
createGrid();

//drawing
function draw(e) {
    //consider changing as which has been deprecated
    if (e.which == 1) {
        this.classList.add('hover-effect');
    };
};

//button related
const buttonPanel = document.querySelector('#button-panel');
const promptForSizeOfGrid = document.createElement('button');
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






