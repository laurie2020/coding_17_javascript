// 1.
let firstDiv = document.getElementsByTagName('div')[0];
console.log(firstDiv.firstElementChild);
// 2.
let titreNiv3 = firstDiv.getElementsByTagName('h3')[1]
console.log(titreNiv3);
// 3.
console.log(titreNiv3.previousElementSibling);
// 4.
console.log(document.getElementsByClassName('petitParagraphe')[0].nextElementSibling)
// 5.
console.log(document.getElementsByClassName('important')[0].parentElement);
// 6.
console.log(document.getElementById('listElements').parentElement.firstElementChild);
// 7.
console.log(document.getElementsByClassName('important')[3].nextElementSibling);
// 8.
console.log(document.getElementById('textGeneral').nextElementSibling.nextElementSibling);
// 9.
console.log(document.getElementsByTagName('span')[1].parentElement.nextElementSibling.firstElementChild);
// 10.
console.log(document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);
// 11.
console.log(document.querySelector('.grandParagraphe'));
// 12.
let li = document.querySelectorAll('li');
li.forEach(element => {
    console.log(element)
})
