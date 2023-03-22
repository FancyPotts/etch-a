const default_size = 16;
const container = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset");
const changeSize = document.getElementById("change");

function grid(size) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size ** 2; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    container.appendChild(gridItem);
    gridItem.addEventListener("mouseover", function () {
      gridItem.classList.add("black");
    });
  }
}

resetBtn.addEventListener("click", function () {
  grid(default_size);
  document.getElementById("size").value = "";
});

changeSize.addEventListener("click", function () {
  let sizeInput = document.getElementById("size").value;
  if (sizeInput > 100) {
    alert("This is too much, keep it at 100 or below.");
    return;
  } else if (sizeInput <= 0) {
    alert("That won't do anything.");
    return;
  } else {
    grid(sizeInput);
  }
});

window.onload = () => {
  grid(default_size);
};
