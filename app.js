const containerDiv = document.querySelector('.container');

function createGrid (gridNumber) { 
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {

        const gridItem = document.createElement('div');
        containerDiv.style.gridTemplateColumns = `repeat(${gridNumber}, 3rem)`;
        containerDiv.style.gridTemplateRows = `repeat(${gridNumber}, 3rem)`;
        gridItem.style.padding = "5%";
        gridItem.classList.add('gridcell');
        containerDiv.appendChild(gridItem);
    } 
    
}


createGrid(10);

const allCells = document.querySelectorAll(`.gridcell`);

allCells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
        cell.style.backgroundColor = "black";
    })
});

const resetButton = document.createElement('button');
resetButton.style.display = "flex";
resetButton.style.flexDirection = "row";
resetButton.style.justifyContent = "center"
resetButton.textContent="Clear";
containerDiv.appendChild(resetButton);