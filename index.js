console.log("working...")



function changeDirection(){
    const element = document.getElementsByClassName("class1");
    const element1 = document.getElementsByClassName("class2");
    element[0].style.flexDirection = "column";
element1[0].innerHTML = `<b> how are you </b>`;
// element[0].innerHTML = `<img src = "./image2.jpg"/> `;
    
}

function changeImage(){
const image = document.getElementsByTagName("img");
    image[0].src = "./image2.jpg"
}

// let element4 = document.createElement("div");
// element4.className = "newdiv";
// element4.id = "newdiv";
// element4.setAttribute("for","value");
// element4.innerText = "hello i have created new div by js";
// console.log(element4);
// document.querySelector("p.class2").appendChild(element4);


let element5 = document.createElement("div");
element5.className = "newDIv";
element5.id = "newDiv";
element5.setAttribute("for","value");
element5.innerText = "Hello I have created a new div from JS";
console.log(element5);
document.querySelector("p.class3").appendChild(element5);

let createElement = document.createElement("img");
createElement.className = "image";
createElement.setAttribute("src","./image2.jpg")
console.log(createElement);