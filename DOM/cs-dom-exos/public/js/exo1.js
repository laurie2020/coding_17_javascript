// exo-counter
// let button = document.querySelector('#exo-counter>button');
// let span = document.querySelector('#exo-counter>span');

// let i = 0;
// button.addEventListener('click', () => {
//     i++;
//     span.textContent = i;
// })

// exo-move-square
// let square = document.querySelector("#square");
// let classes = square.classList;

// square.addEventListener('click', function() {
//   let result = classes.toggle("on");

//   if (result) {
//     square.textContent = 'on';
//   } else {
//     square.textContent = 'off';
//   }
// })

//exo-numerote-title
let h2 = document.querySelectorAll('h2');
let body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
    if(e.key == "6"){
        h2.forEach((element, index) => {
            element.innerText = `${index+1}.${element.innerText}`
        });
    }
})

// exo-multi-click
// let i = 0;
// let multi = document.querySelector('#multi-click');
// multi.addEventListener('click', () => {
//     i++;
//     if(i == 1){
//         multi.style.borderRadius = "50%";
//     } else if(i == 2){
//         multi.style.backgroundColor = "red";
//     } else {
//         i = 0;
//         multi.removeAttribute('style');
//     }
// })

// exo-set-color
// let input = document.querySelector('#pick-color');
// let p = document.querySelector('#exo-set-color>p');
// input.addEventListener('change', () => {
//     p.style.color = input.value; 
// })