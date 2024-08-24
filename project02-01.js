/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author:  May 29, 2024, IST239-W01, Hands-on Project 02-01

      In Hands-on Exercise 02-01 we are adding code to the js file to be used 
	  HTML. The code in this file will create two functions to calculate Celsius
	  and Fahrenheit. The two functions are then used to in anonymous functions
	  to take the user input to calculate either Celsius or Fahrenheit and output 
	  the calculations in the appropriate boxes.
	  
      Filename: project02-01.js
 */

// creates a function named FahrenheitToCelsius with a single parameter
function FahrenheitToCelsius(degree){
return (degree - 32) / 1.8 // calculates Farenheit
}

// creates a function named CelsiusToFahrenheit with a single parameter
function CelsiusToFahrenheit(degree){
return (degree *1.8) + 32 // calculates Celsius
}

// creates an onchange event handler to calculate Celsius to Fahrenheit
document.getElementById("cValue").onchange = function (){
	let cDegree = document.getElementById("cValue").value; // declares a variable to get Celsius
	
	// takes the input and uses the for cValue and uses the CelsiusToFahrenheit function to get Fahrenheit
	document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);  
}

// creates an onchange event handler to calculate Fahrenheit to Celsius 
document.getElementById("fValue").onchange = function (){
	let fDegree = document.getElementById("fValue").value; // declares a variable to get Fahrenheit
	
	// takes the input and uses the for fValue and uses the FahrenheitToCelsius function to get Celsius
	document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
}