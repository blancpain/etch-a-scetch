//grid related
const container = document.querySelector('#container');
function createGrid(squares=16) {
    container.innerHTML = '';
    for (let i = 1; i < (squares * squares) + 1; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
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






