console.log("Predator");

var Predator = (function () {
  let carnivores = [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
    	loader.addEventListener("load", function () {
    	carnivores = JSON.parse(this.responseText);
    	showCarnivores(carnivores);
      });
      loader.open("GET", "carnivores.json")
      loader.send();
    }
  }
})();
