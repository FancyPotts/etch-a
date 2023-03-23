const defaultSize = 16;
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
  grid(defaultSize);
  document.getElementById("size").value = "";
  document.getElementById("size").placeholder = "Grid reset to default"
});

changeSize.addEventListener("click", function () {
  let sizeInput = document.getElementById("size").value;
  if (sizeInput > 100 || sizeInput <= 0) {
    alert("Pick a number between 1 to 100.");
    return;
  } else {
    grid(sizeInput);
    document.getElementById("size").value = "";
    document.getElementById("size").placeholder = `Grid set to ${sizeInput}x${sizeInput}`
  }
});

window.onload = () => {
  grid(defaultSize);
};
