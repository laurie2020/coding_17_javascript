// 1.
let exercice = document.querySelector('h2');
console.log(exercice.innerText)

// 2.
exercice.innerText = 'Exercice 1';

// 3.
let paragraphe = document.querySelector('p');
paragraphe.innerText = 'exercice.innerText = "Exercice 1"'

// 4.
let section = document.querySelector('section');
console.log(section.id);

// 5.
let h1 = document.querySelector('h1').className;
console.log(h1)
h1 = document.querySelector('h1').getAttribute('class');
console.log(h1);

// 6.
let h1Class = document.querySelectorAll('h1');
h1Class.forEach(element => {
    console.log(element.getAttribute('class'));
})

// 7.
let input = document.querySelector('input');
console.log(input.getAttributeNames());


// 8.
console.log(input.getAttribute('type'));

// 9.
let inputPassword = document.querySelector('#inputPassword3')
inputPassword.setAttribute('type', 'password');

// 10.
input.setAttribute('type', 'color')
console.log(input.getAttribute('type'));
