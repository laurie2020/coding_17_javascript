// 1.
console.log(document.getElementsByTagName('h1')[0].nextElementSibling.innerText);

// 2.
console.log(document.getElementsByTagName('ul')[0].lastElementChild.innerText);

// 3.

console.log(document.getElementsByTagName('p')[0].innerText.toUpperCase());

// 4.

let li = document.getElementsByTagName('li');

for(let i = 0; i < li.length; i++){
    console.log(li[i].innerText.toUpperCase());
}