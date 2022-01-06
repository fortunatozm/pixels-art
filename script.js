
let pixelBoard = document.querySelector("#pixel-board");
let line = 5;
let colum = 5;

for (let l = 0; l < line; l++) {
  
  for (let c = 0; c < colum; c++) {
    
  let divElement = document.createElement('div');
  divElement.className = "pixel";

  if ( divElement.style.backgroundColor === 'white' ){

    pixelBoard.appendChild(divElement); 

  } else{

    divElement.classList.add("pixel-background");
    pixelBoard.appendChild(divElement); 
  }
 
  }

  let newLine = document.createElement ('br');
  pixelBoard.appendChild(newLine);
  
}

let selecBlack = document.querySelector(".black");
let selecRed = document.querySelector(".red");
let selecBlue = document.querySelector(".blue");
let selecGreen = document.querySelector(".green");


function addic(origem) {

  for (let index = 0; index < selecBlack.classList.length; index++) {  

    if (selecBlack.classList[index] === "selected"){

      selecBlack.classList.remove("selected");
    }  
  }

  for (let index = 0; index < selecRed.classList.length; index++) {

    if (selecRed.classList[index] === "selected") {

      selecRed.classList.remove("selected");    
    }
  }

  for (let index = 0; index < selecGreen.classList.length; index++) {

    if (selecGreen.classList[index] === "selected") {

      selecGreen.classList.remove("selected");    
    }
  }

  for (let index = 0; index < selecBlue.classList.length; index++) {  

    if (selecBlue.classList[index] === "selected") {

      selecBlue.classList.remove ("selected");    
    }
  }

  let dest = origem.target;
  dest.classList.add("selected");
  // console.log("Aqui");
  // console.log(origem.target);
  // console.log(origem.type);
}

selecBlack.addEventListener("click", addic);
selecRed.addEventListener("click", addic);
selecBlue.addEventListener("click", addic);
selecGreen.addEventListener("click", addic);


let pixels = document.querySelector ("#pixel-board");

function pixelsAdd(pixelOrigen) {
  
  for (let index = 0; index < selecBlack.classList.length; index++) {  

    if (selecBlack.classList[index] === "selected"){

      let destPixels = pixelOrigen.target;
      destPixels.classList.remove("pixel-background");
      destPixels.classList.remove("red");
      destPixels.classList.remove("blue");
      destPixels.classList.remove("green");
      destPixels.classList.add("black");
    }  
  }

  for (let index = 0; index < selecRed.classList.length; index++) {

    if (selecRed.classList[index] === "selected") {
      
      let destPixels = pixelOrigen.target;
      destPixels.classList.remove("pixel-background");
      destPixels.classList.remove("black");
      destPixels.classList.remove("blue");
      destPixels.classList.remove("green");
      destPixels.classList.add("red");
    }
  }

  for (let index = 0; index < selecGreen.classList.length; index++) {

    if (selecGreen.classList[index] === "selected") {

      let destPixels = pixelOrigen.target;
      destPixels.classList.remove("pixel-background");
      destPixels.classList.remove("black");
      destPixels.classList.remove("blue");
      destPixels.classList.remove("red");
      destPixels.classList.add("green");   
    }
  }

  for (let index = 0; index < selecBlue.classList.length; index++) {  

    if (selecBlue.classList[index] === "selected") {

      let destPixels = pixelOrigen.target;
      destPixels.classList.remove("pixel-background");
      destPixels.classList.remove("black");
      destPixels.classList.remove("green");
      destPixels.classList.remove("red");
      destPixels.classList.add("blue");  
    }
  }

}

pixels.addEventListener("click", pixelsAdd);

let button = document.querySelector("#clear-board");
let pixelsCreated = document.querySelectorAll(".pixel")

function reseted() {
  
  for (let index = 0; index < pixelsCreated.length; index++) {
    
    pixelsCreated[index].className = "pixel pixel-background";
    
  }
}

button.addEventListener("click", reseted);
