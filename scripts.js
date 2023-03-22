const default_size = 16
const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset')

const changeSize = document.getElementById('change');

resetBtn.addEventListener('click', function(){ grid(default_size);});
changeSize.addEventListener('click', function(){ 
    let sizeInput = document.getElementById('size').value;
    grid(sizeInput)
});


function grid(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < size**2; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
        gridItem.addEventListener("mouseover", function() {
            gridItem.classList.add('black');
        })
}
}


window.onload = () => {
    grid(default_size)
}