// exo-counter
// let button = document.querySelector('#exo-counter>button');
// let span = document.querySelector('#exo-counter>span');

// let i = 0;
// button.addEventListener('click', () => {
//     i++;
//     span.textContent = i;
// })

// exo-move-square
let square = document.querySelector("#square");
let classes = square.classList;

square.addEventListener('click', () => {
  square.classList.toggle("off");
  square.classList.toggle("on");
})

//exo-numerote-title
let h2 = document.querySelectorAll('h2');
let body = document.querySelector('body');
let i = 0;
body.addEventListener('keydown', (e) => {
    if(e.key == "6" && i == 0){
        h2.forEach((element, index) => {
            element.innerText = `${index+1}.${element.innerText}`
        });
        i = 1
    }else{
        h2.forEach(element => {
            element.innerText = element.innerText.substr(2);
        });
        i = 0
    }
})

// exo-multi-click
let j = 0;
let multi = document.querySelector('#multi-click');
multi.addEventListener('click', () => {
    j++;
    if(i=j == 1){
        multi.style.borderRadius = "50%";
    } else if(j == 2){
        multi.style.backgroundColor = "red";
    } else {
        j = 0;
        multi.removeAttribute('style');
    }
})

// exo-set-color
let input = document.querySelector('#pick-color');
let p = document.querySelector('#exo-set-color>p');
input.addEventListener('change', () => {
    p.style.color = input.value; 
})