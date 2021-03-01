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
let symbol = prompt('Tu veux etre une x ou un o ?');
let onOff = true;
for(let i = 0; casesCopy[i]; i++){
    if(symbol == "x"){
        topLeft.addEventListener('click', () => {
            if(onOff == true){
                topLeft.appendChild(cross);
                casesCopy.splice(casesCopy.indexOf(topLeft), 1);
                console.log(casesCopy);
                setTimeout(() => {
                    let computer = Math.round(Math.random() * casesCopy.length)
                    cases[computer].appendChild(circle);
                    casesCopy.splice(casesCopy[computer], 1);
                    console.log(casesCopy);
                }, 1000)
            }  
        })
        topMiddle.addEventListener('click', () => {
            if(onOff == true){
                topMiddle.appendChild(cross); 
            }
            
        })
        topRight.addEventListener('click', () => {
            if(onOff == true){
                topRight.appendChild(cross);
            }
            
        })
        middleLeft.addEventListener('click', () => {
            if(onOff == true){
                middleLeft.appendChild(cross);
            }
            
        })
        middleMiddle.addEventListener('click', () => {
            if(onOff == true){
                middleMiddle.appendChild(cross);
            }
            
        })
        middleRight.addEventListener('click', () => {
            if(onOff == true){
                middleRight.appendChild(cross);
            }
            
        })
        bottomLeft.addEventListener('click', () => {
            if(onOff == true){
                bottomLeft.appendChild(cross);
            }
            
        })
        bottomMiddle.addEventListener('click', () => {
            if(onOff == true){
                bottomMiddle.appendChild(cross);
            }
            
        })
        bottomRight.addEventListener('click', () => {
            if(onOff == true){
                bottomRight.appendChild(cross);
            }
            
        })
    }
}
