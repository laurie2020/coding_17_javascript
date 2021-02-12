

// 1.
let lastDiv = document.getElementsByTagName('div')[2];
console.log(lastDiv.firstElementChild);
console.log(lastDiv.lastElementChild);
let p1 = lastDiv.firstElementChild.nextElementSibling;
console.log(p1.firstElementChild);
console.log(p1.nextElementSibling.firstElementChild);

let i = document.getElementsByTagName('i')[0];
console.log(i.parentElement);

let b = document.getElementsByTagName('b')[0];
console.log(b.parentElement);

console.log(lastDiv.firstElementChild.nextElementSibling);