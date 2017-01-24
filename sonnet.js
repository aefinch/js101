var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;
console.log(sonnet)
console.log(sonnet.indexOf("orphans"));
console.log(sonnet.length);
sonnet = sonnet.replace("winter", "yuletide")
console.log(sonnet);
sonnet = sonnet.replace(/the /g, "a large ");
console.log(sonnet);
element.innerHTML = sonnet;
