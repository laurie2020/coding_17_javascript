let cases = document.querySelectorAll('#jeu-container>.row>.col')
let casesCopy = [...cases];
console.log(casesCopy);
let topLeft = document.querySelector('#top-left');
let topMiddle = document.querySelector('#top-middle');
let topRight = document.querySelector('#top-right');
let middleLeft = document.querySelector('#middle-left');
let middleMiddle = document.querySelector('#middle-middle');
let middleRight = document.querySelector('#middle-right');
let bottomLeft = document.querySelector('#bottom-left');
let bottomMiddle = document.querySelector('#bottom-middle');
let bottomRight = document.querySelector('#bottom-right');
let cross = document.createElement('i');
cross.className = "fas fa-times";
cross.style.fontSize = "100px";
let circle = document.createElement('i');
circle.className = "far fa-circle";
circle.style.fontSize = "100px";
// let symbol = prompt('Tu veux etre une x ou un o ?');

let determineWinner = () => {
    if(topLeft.firstElementChild){
        if(topMiddle.firstElementChild && topRight.firstElementChild){
            if(topLeft.firstElementChild.className == topMiddle.firstElementChild.className && topMiddle.firstElementChild.className == topRight.firstElementChild.className){
                alert("you won");
            }
        }else if(middleLeft.firstElementChild && bottomLeft.firstElementChild){
            if(topLeft.firstElementChild.className == middleLeft.firstElementChild.className && middleLeft.firstElementChild.className == bottomLeft.firstElementChild.className){
                alert("you won");
            }
        }
    }
    if(bottomRight.firstElementChild){
        if(topRight.firstElementChild && middleRight.firstElementChild){
            if(bottomRight.firstElementChild.className == topRight.firstElementChild.className && topRight.firstElementChild.className == middleRight.firstElementChild.className){
                alert("you won");
            }
        }else if(bottomLeft.firstElementChild && bottomMiddle.firstElementChild){
            if(bottomRight.firstElementChild.className == bottomLeft.firstElementChild.className && bottomLeft.firstElementChild.className == bottomMiddle.firstElementChild.className){
                alert("you won");
            }
        }
    }
    if(middleMiddle.firstElementChild){
        if(topMiddle.firstElementChild && bottomMiddle.firstElementChild){
            if(middleMiddle.firstElementChild.className == topMiddle.firstElementChild.className && topMiddle.firstElementChild.className == bottomMiddle.firstElementChild.className){
                alert("you won");
            }
        }else if(middleLeft.firstElementChild && middleRight.firstElementChild){
            if(middleMiddle.firstElementChild.className == middleLeft.firstElementChild.className && middleLeft.firstElementChild.className == middleRight.firstElementChild.className){
                alert("you won");
            }
        }else if(topLeft.firstElementChild && bottomRight.firstElementChild){
            if(middleMiddle.firstElementChild.className == topLeft.firstElementChild.className && topLeft.firstElementChild.className == bottomRight.firstElementChild.className){
                alert("you won");
            }
        }else if(topRight.firstElementChild && bottomLeft.firstElementChild){
            if(middleMiddle.firstElementChild.className == topRight.firstElementChild.className && topRight.firstElementChild.className == bottomLeft.firstElementChild.className){
                alert("you won");
            }
        }
    }
}
console.log(casesCopy);
// cases.forEach(element => {
//     element.addEventListener('click', () => {
//         let user;
//         let computer;
//         if(symbol == "x"){
//             user = cross.cloneNode();
//             computer = circle.cloneNode()
//             casesCopy.splice(casesCopy.indexOf(element), 1);
//             element.appendChild(user);
//             console.log(casesCopy);
//             if(casesCopy.length > 0){
//                 setTimeout(() => {
//                     let index = Math.floor(Math.random()*casesCopy.length)
//                     casesCopy[index].appendChild(computer)
//                     casesCopy.splice(index, 1);
//                     console.log(casesCopy);
//                 }, 2000)
//                 determineWinner();   
//             }  
//         }else if(symbol == "o"){
//             user = circle.cloneNode();
//             computer = cross.cloneNode()
//             newIcone = circle.cloneNode();
//             casesCopy.splice(casesCopy.indexOf(element), 1);
//             element.appendChild(user);
//             if(casesCopy.length > 0){
//                 setTimeout(() => {
//                     let index = Math.floor(Math.random()*casesCopy.length)
//                     casesCopy[index].appendChild(computer)
//                     casesCopy.splice(index, 1);
//                     console.log(casesCopy);
//                 }, 2000)      
//             } 
//         }
//     })      
// })
let onOff = "off";
cases.forEach(element => {
    element.addEventListener('click', () => {
        if(onOff == "on"){
            console.log(onOff);
            onOff == "off";
            let crossClone = cross.cloneNode();
            casesCopy.splice(casesCopy.indexOf(element), 1);
            element.appendChild(crossClone);

        }
        if(onOff == "off"){
            log
            onOff == "on";
            let circleClone = circle.cloneNode();
            casesCopy.splice(casesCopy.indexOf(element), 1);
            element.appendChild(circleClone);
        }
    })
        
});