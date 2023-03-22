const container = document.getElementById('grid-container');

for (i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
}