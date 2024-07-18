let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [40, 96, 152, 210, 270, 318]
let carsSpeed = [2, 2.5, 3.2, 5, 3.3, 2.3]
const carWidth = 50
const carHigth = 40




function showCar(){
  for (let i = 0; i < carsImage.length; i++){  
    image(carsImage[i], xCars[i], yCars[i], carWidth, carHigth)
  }

}

function carMoviment(){
  for (let i = 0; i < carsImage.length; i++) {
    xCars[i] -= carsSpeed[i]
  }  
}

function backCarStartPosition(){
  for (let i = 0; i < carsImage.length; i++) {
    if (outOfScreen(xCars[i])){
      xCars[i] = 600
    }
  }
}

function outOfScreen(xCar) {
  return xCar < -50
}