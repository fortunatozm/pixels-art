
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

    divElement.style.backgroundColor = 'white';
    pixelBoard.appendChild(divElement); 
  }
 
  }

  let newLine = document.createElement ('br');
  pixelBoard.appendChild(newLine);
  
}

