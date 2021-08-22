
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
// let para=document.getElementById("access");
// console.log(para);
// para.style.backgroundColor="red";
// para.style.color="white";

// //applying in same line using csstext
// para.style.cssText="color:white background-color:red";

// //using classnames
// para.classList.add("textColor");

// //
// function onButtonClick (){
//     let para=document.getElementById("access");
//     para.classList.add("textColor");
//     console.log("button clicked");
// }

// //

// function onButtonClick (){
//     let para=document.getElementById("access");
//     para.classList.add("textColor");
// }


// function onButtonClick2 (){
//     let para=document.getElementById("access");
//     para.classList.remove("textColor");
    
// }

// //inner text
// let para=document.getElementById("access");
// console.log(para.innerText);

// //text content
// let para=document.getElementById("access");
// console.log(para.textContent);

// //inner html
// let para=document.getElementById("access");
// console.log(para.innerHTML);

// //
// let para=document.getElementById("access");
// para.innerText="learning     DOM";

// //
// let para=document.getElementById("access");
// para.innerText="learning     <b>DOM</b>";

// //
// let para=document.getElementById("access");
// para.textContent="learning     <b>DOM</b>";

// //
// let para=document.getElementById("access");
// para.innerHTML="learning     <b>DOM</b>";





// let rootEl=document.getElementById("root");
// console.log(root);

// let newPara =document.createElement("p");
// newPara.innerHTML="hello world!"
// console.log(newPara);

//
let rootEl=document.getElementById("root");

let countEl=document.createElement("h1");
countEl.innerHTML=0;

let incrementB=document.createElement("button");
incrementB.setAttribute("onclick","increment()");
incrementB.innerText="increment";


let decrementB=document.createElement("button");
decrementB.setAttribute("onclick","decrement()");
decrementB.innerText="decrement";


let resetB=document.createElement("button");
resetB.setAttribute("onclick","reset()");
resetB.innerText="reset";

rootEl.appendChild(countEl);
rootEl.appendChild(incrementB);
rootEl.appendChild(decrementB);
rootEl.appendChild(resetB);



 function increment(){
  let currentCount = countEl.innerText;
  let updatedCount = parseInt(currentCount)+1;
   countEl.innerHTML=updatedCount;
}

 function decrement(){
    let currentCount = countEl.innerText;
     let updatedCount = parseInt(currentCount)-1;
    countEl.innerHTML=updatedCount;
 }

 
function reset(){
    countEl.innerHTML=0;
  }