
// Number

var x = 10; // 10.0
var y = 3.8;
var z = -0.13463;


// String

var a = "This is a string";
var b = "h";
var c = "10393";
var d = 'This is a string';

// console.log(a.length); // gives the lenght of the string

// indexOf


var a = "This is a string";

var i = a.indexOf("strin");

var newStr = a.substring(5, 12);


// toLowerCase, toUpperCase

var mixed = "I liSTEN to my MOM";
var mixed_lowercase = mixed.toLowerCase();
var mixed_uppercase = mixed.toUpperCase();

//console.log(mixed_uppercase);


// Boolean

var k;
k = true; 

var dog = false;

// Null and undefined

var cars; // undefined
k = null;



var m = 10;
m = "cat";
m = null;
m = 13;


//// OPERATORS

// Assignment, =

var m = 10;


// Mathematical
///+ - * / % ++ --

m = m + 3; // m = 13
m = m - 3; // m = 10

m = m / 2;
m = m * 20.34;

m = m % 2;

m = m - 1;
m--;

m = m + 1;
m++;


// Relational

// >=
// >
// <=
// <
// ==
// !=

// Logic

// ||
// &&


var x = 3.2;

if (x > 5) {
  console.log("x is greater than 5");
} else if (x <= 5 && x > 2) {
  console.log("x is between 2 and 5");
} else {
  console.log("x is less than 2");
}


for (var i=0; i<10; i++) {
  console.log("i = " + i);
}

var k = true;
k = !k;
console.log(k)


