
// let parentEl=document.getElementById("parent");
// console.log(parentEl);

// console.log(parentEl.firstChild);

// console.log(parentEl.lastChild);

// console.log(parentEl.childNodes);

// console.log(parentEl.firstElementChild);

// console.log(parentEl.lastElementChild);

// console.log(parentEl.children[3]);

// let midEl=document.getElementById("middle");
// console.log(middle);

// console.log(midEl.nextElementSibling);

// console.log(midEl.previousElementSibling);

// let pEl=document.getElementById("middle");
// console.log(pEl.parentElement);

//applying individually
let para=document.getElementById("access");
console.log(para);
para.style.backgroundColor="red";
para.style.color="white";

//applying in same line using csstext
para.style.cssText="color:white background-color:red";

//using classnames
para.classList.add("textColor");

//
function onButtonClick (){
    let para=document.getElementById("access");
    para.classList.add("textColor");
    console.log("button clicked");
}

//

function onButtonClick (){
    let para=document.getElementById("access");
    para.classList.add("textColor");
}


function onButtonClick2 (){
    let para=document.getElementById("access");
    para.classList.remove("textColor");
    
}

//inner text
let para=document.getElementById("access");
console.log(para.innerText);

//text content
let para=document.getElementById("access");
console.log(para.textContent);

//inner html
let para=document.getElementById("access");
console.log(para.innerHTML);

//
let para=document.getElementById("access");
para.innerText="learning     DOM";

//
let para=document.getElementById("access");
para.innerText="learning     <b>DOM</b>";

//
let para=document.getElementById("access");
para.textContent="learning     <b>DOM</b>";

//
let para=document.getElementById("access");
para.innerHTML="learning     <b>DOM</b>";