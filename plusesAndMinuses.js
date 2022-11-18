/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 15, 2022
 * Pluses and Minuses
 */

/**
1. Create an HTML document with three elements:
One element should have a +
One element should have a –
One element should show the count. This starts at 0.
Event listeners should be set up to modify the count and display the current count on screen as follows:
2. When a user clicks the + element, the count should increase by 1.
3. When a user clicks the – element, the count should decrease by 1 
*/

//define counter and start at 0
let counter = 0;

// When a user clicks the + element, the count should increase by 1 on screen.
const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', (e) => {counter++; document.getElementById('counter')
.innerHTML = counter});

// When a user clicks the – element, the count should decrease by 1 on screen.
const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', (e) => {counter--;document.getElementById('counter')
.innerHTML = counter});