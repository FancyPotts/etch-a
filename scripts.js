const container = document.getElementById('grid-container');


for (i = 0; i < 16**2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
    gridItem.addEventListener("mouseover", function() {
        gridItem.classList.add('black');
    })
}

const onGrid = document.querySelector("div");

;