// var day = "Friday";
// switch(day) {
// 	case "Monday":
// 	console.log("Booooo");
// 	break;
// 	case "Friday":
// 	console.log("PARTAY");
// 	break;
// 	default:
// 	console.log("not monday")
// }

// //Arrays
// var fruit = ["cherries", "apples", "bananas"];
// var fruitString=fruit.join(" cats ");
// console.log("fruitstring", fruitString);

// var catColors = 'green,red,yellow,black';
// var catColorsArray = catColors.split(",");
// console.log("catColorsArray", catColorsArray);

// var reverseFruit = fruit.reverse();
// console.log("reverseFruit", reverseFruit);

// var alphaFruit = fruit.sort();
// console.log("alphaFruit", alphaFruit);

// var nums = [9,6,8,2,4,11,66]
// var numSort = nums.sort(function(a,b){return a-b;});
// console.log(numSort);

// var mixedCrap = ["r", "m", 33, 9];
// console.log("????",mixedCrap.sort());

// var animals = ["cats", "turtles", "fish", "bears", "tiggers"];
// console.log("fish index", animals.indexOf("fish"));

// var animals2 = animals.slice(2,4);
// console.log("animals2", animals2);

// animals.splice(1,1);
// console.log("no turtles", animals);

// var colors = ["red", "blue", "gold", "pink", "orange"];

// //sort, reverse, make it a string
// var finalAnswer=colors.sort().reverse().join(" cat ");
// console.log("finalAnswer", finalAnswer);


for(var i=0;i<5; i++){
	console.log("i", i);
}

var fruit = ["cherries", "apples", "bananas", "oranges"];
for(var j=0; j<fruit.length; j++){
	console.log("fruit", fruit[j])
}

//write a for loop that increments by 10 each time
for (var k=0; k<100; k+=10) {
console.log(k+10);
}
	
//for loop that pushes the index to an array for 5 times console.log(array)
var index=[];
for (var x=0; x<5; x++) {
	index.push(x);
}
	console.log(index);

//for loop that starts at 100 and divides by 2 each time 3 times = 100,50,25
var num=100;
for (var y=0; y<3; y++){
	console.log(num);
	num=num/2;
}
console.log(num);











