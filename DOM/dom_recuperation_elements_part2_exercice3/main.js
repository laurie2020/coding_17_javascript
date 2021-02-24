// 1.
console.log(document.querySelector('#content'));
// 2.
console.log(document.querySelectorAll('#content')[0]);
// 3.
console.log(document.querySelector('.important'), document.querySelector('.important').nextElementSibling, document.querySelector('.important').nextElementSibling.nextElementSibling, document.querySelector('.important').nextElementSibling.nextElementSibling.nextElementSibling)
// 4.
console.log(document.querySelectorAll('.important'));
// 5.
let li = document.querySelectorAll('li');
li.forEach(element => {
    console.log(element.innerText.slice(0, element.innerText.length - 1) + element.innerText.slice(element.innerText.length - 1).toUpperCase());
});
// 6.
console.log(document.getElementById('content').getElementsByClassName('grandParagraphe')[0]);
