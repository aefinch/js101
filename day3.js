// OBJECTS

var myCat = {
	tail: "long",
	age: 29,
	color: "blue",
	friends: ["zoe", "callan", "lauren"]
}
console.log("myCat before ", myCat);
myCat.owner = "zoe"
console.log("myCat after ", myCat);

console.log("Age of cat: ", myCat.age);
console.log("Color of cat: ", myCat["color"]);
for(var myKey in myCat) {
	console.log("myKey ",myKey);
	console.log("values", myCat[myKey]);
}

// Intro to Functions via Nuggets

var nuggetElement = document.getElementById("nuggetShack");
var availElement = document.getElementById("availForPurchase");
console.log("nuggetElement", nuggetElement);
console.log("availForPurchase", availForPurchase);

function nuggetMaker(animal) {
	var myNugget = "breading " + animal + " breading";
	return myNugget;
}

function addBr(){
	return "</br>";
}
function shackMaker(divLocation, typeOfNugget) {
	var newBreak = addBr();
	divLocation.innerHTML += typeOfNugget + newBreak;
}



var chickenNuggets = nuggetMaker("chicken");
shackMaker(availElement, chickenNuggets);
// nuggetElement.innerHTML = chickenNuggets;
var lobsterNuggets = nuggetMaker("lobster");
// nuggetElement.innerHTML = lobsterNuggets;
shackMaker(availElement, lobsterNuggets);

var tablets = nuggetMaker("myComputer");
shackMaker(availElement, tablets);

var shackName = "Callan's Shack";
// nuggetElement.innerHTML+=shackName;
shackMaker(nuggetElement, shackName);

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
var colors = ["red", "blue", "gold", "pink", "orange"];
function myLooper(myArray) {
	for (var i = 0; i<myArray.length; i++) {
		console.log(myArray[i]);
	}
}
myLooper(animals);
myLooper(colors);








