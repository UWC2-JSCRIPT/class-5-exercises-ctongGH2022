/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 15, 2022
 * To Do List
 */

/*
To Do List
You will create a "To Do" list (start with files in linked repository above). Hints at the end.
Each list item will be an <li> element, and will contain 3 elements:
a <span> with the item description
an <a> link that allows you to delete the item
<li>
ex.
<span>Homework</span>
<a class="delete">Delete</a>
</li>
*/

// 1. If an li element is clicked, toggle the class "done" on the <li>
const liEl = document.querySelector('li');
liEl.addEventListener('click', (e) => {
  liEl.classList.toggle('done')});   
     

// 2. If a delete link is clicked, delete the li element / remove from the DOM
const deleteEl = document.querySelector('a');
deleteEl.addEventListener('click', (e) => {
liEl.remove('li')});


// 3. If an 'Add' link is clicked, adds the item as a new list 
  const addEl = document.querySelector('div');//ok, but click on text box
  addEl.addEventListener('click', (e) => {
    const input = document.getElementsByTagName('input')[0];
    const text = input.value; // use this text to create a new <li>
    const ulEl = document.querySelector('ul');
    if (text !== "") { 
      var liEl = document.createElement('li');
      var spanEl = document.createElement('span');
      var aEl = document.createElement('a');

      ulEl.appendChild(liEl); //add li to ul
      spanEl.innerHTML = text; //text for span
      liEl.appendChild(spanEl); //add span to li

      aEl.className = "delete"; //class for link
      aEl.innerHTML = "Delete"; //text for link
      liEl.appendChild(aEl);    //add link to li

      //clear input field
      input.value = '';
     
      //if click to item on list, toggle to 'done'
      spanEl.onclick = function(){
        liEl.classList.toggle('done')
      };

      //if click to Delete, delete the li element / remove from the DOM
      aEl.onclick = function(){
        liEl.remove('li');
      } 
    } //end if (text !== "")
  }) //end addEventListener