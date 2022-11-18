/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 15, 2022
 * Traversing the DOM
 */

// 1. Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
console.log(`1. Travering the <main> nodes (given <body> element)`);
for (let i = 1; i < body.childNodes.length-2; i++) {
    console.log(body.childNodes[i]); //text, main, h1, ul, p, text.
}

// 2. Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
console.log('2. Travering the <body> nodes (given <ul> element)');
//parent of ul is <main>, parent of <main> is <body>
console.log(ul.parentNode.parentNode); 

// 3. Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
console.log('3. Access the 3rd <li> (given <p> node)');
console.log(p.parentNode.childNodes[3].childNodes[5]);