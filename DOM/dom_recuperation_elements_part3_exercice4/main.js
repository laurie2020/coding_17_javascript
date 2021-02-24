// 1.
let elements = document.querySelectorAll('#liste-competences>h2');
console.log(elements);

let competences = {
    html: 80,
    css: 80,
    js: 60,
    react: 0,
    laravel: 100
}

// 2.
let i = 0;
for(let key in competences){
    elements[i].textContent += " " + competences[key] + "%";
    i++;
}

// 3.
let j = 0
// for(let key in competences){
//     if(competences[key] == 100){
//         elements[j].setAttribute('style', 'background-color: gold;')
//     }else if(competences[key] > 50){
//         elements[j].setAttribute('style', 'background-color: green; color: white;')
//     }else if(competences[key] < 50){
//         elements[j].setAttribute('style', 'background-color: red;')
//     }
//     j++;
// }

for(let key in competences){
    if(competences[key] == 100){
        elements[j].style.backgroundColor = 'gold';
    }else if(competences[key] > 50){
        elements[j].style.backgroundColor = 'green'; 
        elements[j].style.color =  'white';
    }else if(competences[key] < 50){
        elements[j].style.backgroundColor = 'red'
    }
    j++;
}

