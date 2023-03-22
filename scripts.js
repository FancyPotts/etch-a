const default_size = 16
const container = document.getElementById('grid-container');
const btn32 = document.getElementById('grid32');
const btn50 = document.getElementById('grid50');
const resetBtn = document.getElementById('reset')

btn32.addEventListener('click', function(){ grid(32);});
btn50.addEventListener('click', function(){ grid(50);});
resetBtn.addEventListener('click', function(){ grid(default_size);});


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