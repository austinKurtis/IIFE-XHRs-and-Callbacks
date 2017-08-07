console.log("iffe-xhr.js");




function showCarnivores (carnivores) {
  let carnPrint = document.getElementById("carnHere");
  carnPrint.innerHTML += carnivores.join(" ") + "<br>";
}

function showHerbivores (herbivores) {
  let herbPrint = document.getElementById("herbHere");
  herbPrint.innerHTML += herbivores.join(" ") + "<br>";
}


let carnBtn = document.getElementById("btn-carns");
carnBtn.addEventListener("click", getPrey);

function getPrey(event) {
	console.log("getPred");
	Prey.loadHerbivores(showHerbivores);
}


// predBtn.addEventListener("click", () => {
// 	console.log("Get Pred");
// });

//	
// carnBtn.addEventListener("click", runCarn());

let predBtn = document.getElementById("btn-preds");
predBtn.addEventListener("click", getPred);

function getPred(event) {
	console.log("getPred");
	Predator.loadCarnivores(showCarnivores);
}

// function runCarn(){
// 	console.log("carn");
// 	Prey.loadHerbivores(showHerbivores);
// }