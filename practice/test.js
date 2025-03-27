// function calculateArea(r){
//     var area;
//     if (r <=0) {
//         return 0;
//     } else {
//         area = Math.PI * r * r;
//         return area;
//     }
// }

// var radius = 6.9;
// var theArea = calculateArea(radius);
// console.log("The area is: " + theArea);

function printName(firstName, middleName, lastName, suffixName){
    var fullName = firstName + " " + middleName + " " + lastName + " " + suffixName;
    return fullName;
}

var first = "Ramon";
var middle = "Dizon";
var last = "Bulan";
var suffix = "IV";

var full = printName(first, middle, last, suffix);
console.log("My Fullname is " + full);