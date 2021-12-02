// No arguments

const wallPainting1 = function () {
    console.log("The wall has been painted red");
}

wallPainting1();

// Single arguments

const wallPainting2 = function (item) {
    console.log("The wall has been painted " + item);
}

const wallColor = "blue"; 

wallPainting2(wallColor);

// Multiple arguments

const wallPainting3 = function (item) {
    console.log("The north wall has been painted " + item);
}

const southWallColor = "purple"; 
const northWallColor = "orange";  

wallPainting3(southWallColor);
wallPainting3(northWallColor);