/**
 * Cecilia Tong
 * Class 5 Exercise & Homework
 * Nov 15, 2022
 * Where's the Pointer
 */

// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

let tds = document.querySelectorAll("td");
tds.forEach(td => {
  td.addEventListener("click", (e) => {
    td.innerText = `client X,Y:  ${e.clientX}, ${e.clientY}`;
    //console.log(e.clientX,e.clientY); 
}) });