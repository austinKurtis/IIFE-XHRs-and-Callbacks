console.log("Prey");

var Prey = (function () {
  let herbivores = [];
  return {
    loadHerbivores: function (callbackToInvoke) {
      var herbLoader = new XMLHttpRequest();

      herbLoader.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText);
        showCarnivores(herbivores);
      });
      herbLoader.open("GET", "herbivores.json")
      herbLoader.send();
    }
  }
})();
	    // Set the value of the private array

        // Invoke the callback function so that the caller knows

        // that the process is complete. Make sure to pass the 
        
        // carnivore array as an argument.