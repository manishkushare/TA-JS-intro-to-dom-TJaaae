// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector("h1");
// Check the typeof heading and log it.
console.log("typeof heading :",typeof(heading));

// Change the color of heading to black.
heading.style.color = "black";
// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs = document.querySelectorAll("hr");
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray
Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = ([...allHrs]);

// Set the border of the all the hr elements to "1px solid tomato"
allHrs.forEach(e => {
  e.style.border = "1px solid tomato"
})
// Change the background of all the hr to "antiquewhite" using for of loop.
allHrs.forEach(e => {
  e.style.background = "antiquewhite";
});
// Change the 'border-radius' of all the hr to "5px" using array.
allHrs.forEach(e => {
  e.style.borderRadius = "5px";
});
// Change the alignment of the heading(h1) to center.
heading.style.textAlign = "center";
// Change the font size of the heading to 3rem.
heading.style.fontSize = "3rem";
// Change the border of hr with class 'image' to `2px solid purple`.
document.querySelectorAll(".image").forEach(e => {
  e.style.border = "2px solid purple";
});
// Hide the box number 17 (last box).
document.querySelector(".seventeen").style.display = "none";
// Change the border of all the hr element from solid to dashed type
document.querySelectorAll(".image").forEach(e => {
  e.style.border = "2px dashed purple";
});
// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement("p");
// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText = "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure.";
// Remove all the elements from box 1
document.querySelector(".one").firstChild.remove();
// Replace all the elements inside box 1 with the para (you created above)
document.querySelector(".one").append(para);
/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/
let box16 = document.querySelector(".sixteen");
console.log("box 16 parent node :", box16.parentNode);
console.log("box 16 child nodes :", box16.childNodes);
console.log("box 16 previous siblings :", box16.previousSibling);
console.log("box 16 next siblings :", box16.nextSibling);
console.log("box 16 first child :", box16.firstChild);
console.log("box 16 last child :", box16.lastChild);

console.log("box 16 previous element siblings :", box16.previousElementSibling);
console.log("box 16 next element siblings :", box16.nextElementSibling);
console.log("box 16 first element child :", box16.firstElementChild);
console.log("box 16 last element child :", box16.lastElementChild);



// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.
let newPara = "Append inserts as last child";
document.querySelector(".two").append(newPara);
// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let newPara2 = "Prepend inserts as first child";
document.querySelector(".three").prepend(newPara2);
// Change the border of box 4 to '1px solid black'
document.querySelector(".four").style.border = "1px solid black";
// Change the border radius of box 5 to 10px.
document.querySelector(".five").style.borderRadius = "10px";
// Change the text color of box 6 to black.
document.querySelector(".six").style.color = "black";
// Change the font size of the para inside box 1 to 0.8rem.
document.querySelector(".one p").style.fontSize = "0.8rem";
// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue
let boxes = [...document.querySelectorAll(".box")];
boxes.reduce((acc,cv,ci)=> {
  if(ci % 2 == 0){
    console.log(ci);
    console.log(cv);
    cv.style.background = "aliceblue";
  }
},0);
// add a class named "awesome-box" to the box 6 using classList property of DOM element.
document.querySelector(".six").classList.add("awesome-box");
// Using the toggle classList property toggle the class `awesome-box` from box 2
document.querySelector(".two").classList.toggle("awesome-box");
console.log("classs name :",document.querySelector(".two").classList);
// Using the remove classList proeprty remove the class `awesome-box` from box 4
console.log("classs name before :",document.querySelector(".four").classList);

document.querySelector(".four").classList.remove("awesome-box");
console.log("classs name after:",document.querySelector(".four").classList);

// Change the background of the body to bisque
document.body.style.background = "bisque";
// Create a button and store it in a variable named 'btn'
let btn = document.createElement("button");
// textContent of the button should be 'Click Me'
btn.innerText = "Click Me";
// Change the background of the btn to 'oldlace'
btn.style.background = "oldlace";
// Change the font size of the btn to 1rem
btn.style.fontSize = "1rem";
// Change the border of the btn to '1px solid black'
btn.style.border = "1px solid black";
// Add the padding of '0.5rem 1rem' to btn
btn.style.padding = "0.5rem 1rem";
// Append the btn in box number 9
document.querySelector(".nine").append(btn);

// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm

let imgElm = document.createElement("img");
imgElm.src = "https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80`"



// Select the box 7 using class seven
document.querySelector(".seven");
// Remove all the elements form box seven
let boxSeven = document.querySelector(".seven");
while(boxSeven.firstElementChild){
  boxSeven.firstElementChild.remove();
}
// Append the imgElm to the box no 7
boxSeven.append(imgElm);
// Change the width and height of the image to `100%`
imgElm.style.width = "100%";
imgElm.style.height = "100%";

// Select the box 5 using class five
let boxFive = document.querySelector(".five");
// Create an input element
let inputElem = document.createElement("input");

// Change the placeholder property of the input element to "Enter you email!"
inputElem.placeholder = "Enter you email!";
// Append the input element to the box 5 you selected above
boxFive.append(inputElem);
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let anchorOne = document.createElement("a");
let anchorTwo = document.createElement("a");
anchorOne.innerText = "Altcampus";
anchorTwo.innerText = "Google";
// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
anchorTwo.href = "https://google.com";
anchorOne.href = "https://altcampus.school";
// Append both the elements to box 5 you selected above.
boxFive.append(anchorOne,anchorTwo);



