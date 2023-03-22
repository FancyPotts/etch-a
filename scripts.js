const default_size = 16
const container = document.getElementById('grid-container');

function grid (size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < 16**2; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
        gridItem.addEventListener("mouseover", function() {
            gridItem.classList.add('black');
        })
}
}

const onGrid = document.querySelector("div");

window.onload = () => {
    grid(default_size)
}