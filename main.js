//UI
const container = document.querySelector('#container');

//create 16x16 grid
for (let i = 1; i < 257; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

function draw(e) {
    if (e.which == 1) {
        this.classList.add('hover-effect');
    };
};

const children = container.childNodes;
children.forEach(child => child.addEventListener("mousemove", draw));



