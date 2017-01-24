// 1. How many hours are in a year
// 2. How many minutes are in a decade
// 3. How many seconds old they are
// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

var DaysinYear=365;
var HoursinDay=24;
var MinutesinHour=60;
var YearsinDecade=10;
var HoursinYear=DaysinYear*HoursinDay;
console.log("There are", HoursinYear, "hours in a year")
var MinutesinYear=MinutesinHour*HoursinYear;
var MinutesinDecade=MinutesinYear*YearsinDecade;
console.log("There are ", MinutesinDecade, " minutes in a decade")
var SecondsinMinute=60;
var SecondsinYear=MinutesinYear*SecondsinMinute;
var user_age=prompt("What is your age?")
var ageInSeconds=user_age*SecondsinYear;
console.log("You are ", ageInSeconds, " seconds old")
if (user_age < 60) {
	console.log("I'm young")
} else {
	console.log("I'm old")
}