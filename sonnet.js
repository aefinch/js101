var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;
console.log("location of orphans", sonnet.indexOf("orphans"));
console.log("char length of sonnet", sonnet.length);
sonnet = sonnet.replace("winter", "yuletide");
console.log("winter replaced", sonnet);
sonnet = sonnet.replace(/the /g, "a large ");
console.log("final version", sonnet);
element.innerHTML = sonnet;
