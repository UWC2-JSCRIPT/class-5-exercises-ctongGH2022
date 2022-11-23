/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 15, 2022
 * Produce CRUD
 */

// 1. Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const aElement = document.createElement('a'); //create HTML element node
const aTextNode = document.createTextNode('Buy Now!'); //create text node
aElement.appendChild(aTextNode); //add textnode to node
aElement.id = 'cta'; //set id for element
//add element before </main>, after the last <p>
const mainEL = document.getElementsByTagName('main')[0]; //get main
const pEl = document.getElementById('p'); //get p
mainEL.insertBefore(aElement,pEl); //insert after the last p

// 2. Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.getElementsByTagName('img')[0]; //get the image tag
const imgDataColor = img.getAttribute('data-color'); //get the attribute 'data-color' of img
console.log(`Data-color of the image is ${imgDataColor}.`); //log to console

// 3. Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdLi = document.getElementsByTagName('li')[2];
thirdLi.setAttribute('class', 'highlight');

// 4. Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
document.getElementsByTagName('p')[0].remove();