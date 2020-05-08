let squareMaker = document.getElementById("gridContainer");
let toAdd = document.createDocumentFragment();
let clear = document.getElementById("clearGrid")
let body = document.getElementById("body")

for (i =0; i < 256; i++) {

    let squareHooker = document.createElement('div');

    squareHooker.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black';
    });

    squareHooker.id = ('addedSquare');
    toAdd.appendChild(squareHooker);
    squareMaker.appendChild(toAdd);
};

clear.addEventListener("click", function() {

    body.innerHTML = ("");

    let size = window.prompt("Enter the desired length by width of your grid as a single integer: ")
    let sizeSq = (size*size);
    let newGrid = document.createElement('div');

    newGrid.id = ('gridContainerNew');
    newGrid.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)');
    newGrid.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr');

    toAdd.appendChild(newGrid);
    body.appendChild(toAdd);

    for (i=0; i < sizeSq; i++) {

        let squareHookerOne = document.createElement('div');

        squareHookerOne.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
    
        squareHookerOne.id = ('addedSquareUser');
        toAdd.appendChild(squareHookerOne);
        gridContainerNew.appendChild(toAdd);
        
    }

})




