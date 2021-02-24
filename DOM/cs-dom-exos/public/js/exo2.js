// exo-copy-img
let addButton = document.querySelector('#exo-copy-img>button');
let mignonContainer = document.querySelector('#mignon-container');
addButton.addEventListener('click', () => {
    let newImage = document.createElement('img');
    newImage.src = "../images/mignons.gif";
    newImage.width = "200"
    mignonContainer.appendChild(newImage);
})

// exo-rm-img
// let body = document.querySelector('body');
let container = document.querySelector('#mignon2-container')
// container.addEventListener('click', (e) => {
//     e.path[0].style.display = "none";
//     console.log(document.querySelectorAll("#mignon2-container>img"));
// })

container.addEventListener('click', (e) => {
    container.removeChild(e.target);
    if(document.querySelectorAll('#mignon2-container>img').length == 0){
        setTimeout(() => {
            for(let i = 0; i < 5; i++){
                let img = document.createElement('img');
                img.src = "../images/mignons2.gif";
                img.width = "200";
                container.appendChild(img);
            }
        }, 1000)
    }
})


//exo-add-li
let list  = document.querySelector('#exo-add-li>ul');
let li1 = document.querySelectorAll("#exo-add-li>ul>li")[0]
let li2 = document.createElement('li');
li2.innerText = 'li num 2';
li1.append(li2)


//exo-li-from-input
let input = document.querySelector('.form-control');
console.log(input);
let button = document.querySelector('.form-row>div>button');
console.log(button);
let liste = document.querySelector('#exo-li-from-input>ul');
button.addEventListener('click', () => {
    let newLi = document.createElement('li');
    newLi.innerText = input.value;
    liste.insertBefore(newLi, document.querySelectorAll("#exo-li-from-input>ul>li")[0]);
    input.value = '';
})


let edit = document.querySelector('#exo-li-from-input>button')
edit.addEventListener('click', () => {
    let liste = document.querySelectorAll("#exo-li-from-input>")
    edit.className = "btn btn-success mb-4";

})
