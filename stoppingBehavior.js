/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 15, 2022
 * Stopping Behavior
 */

// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// 1. When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

//define element & added alert when click to 'More info'
const aEl = document.getElementById("more-info");
aEl.addEventListener('click', (e)=>{alert(`Here's some info`)
//prevent going to a new webpage
e.preventDefault();})

// 2. When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

//define element & added alert 'Bow wow!'
const buttonEl = document.getElementById("dog");
buttonEl.addEventListener('click', (e)=> {alert(`Bow wow!`)
//stop bubbling to parent/child listeners
e.stopPropagation(); })