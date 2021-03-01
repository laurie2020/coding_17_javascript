// exo1
let exo1 = document.querySelector('.box-body');
console.log(exo1);

// let input = document.querySelectorAll('#exo-1>div>input');
// let input1 = input[0];
// let input2 = input[1];
// console.log(input1, input2);

// let egal = document.querySelector('#exo-1>div>button');
// let reponse = document.querySelector('#response1')
// egal.addEventListener('click', () => {
//     reponse.textContent = parseInt(input1.value) + parseInt(input2.value);
// })


// exo2
// let input = document.querySelectorAll('#exo-2>div>input');
// let input1 = input[0];
// let input2 = input[1];
// let egal = document.querySelector('#exo-2>div>button');
// let reponse = document.querySelector('#response2')
// let inputOperateur = document.querySelector('#exo-2>div>select')
// egal.addEventListener('click', () => {
//     var strUser = inputOperateur.options[inputOperateur.selectedIndex].text;
//     switch(strUser){
//         case '+':
//             reponse.textContent = parseInt(input1.value) + parseInt(input2.value);
//             break;
//         case '-':
//             reponse.textContent = parseInt(input1.value) - parseInt(input2.value);
//             break;
//         case '*':
//             reponse.textContent = parseInt(input1.value) * parseInt(input2.value);
//             break;
//         case '/':
//             reponse.textContent = parseInt(input1.value) / parseInt(input2.value);
//             break;
//     }
// })

// let input = document.querySelectorAll('#operatorsExo3>input');
// let input1 = input[0];
// let input2 = input[1];
// let buttonGroup = document.querySelectorAll('#operatorsExo3>button');
// let operator = document.querySelector("#operatorsExo3>span>i");
// let plus = buttonGroup[1]
// let moin = buttonGroup[2]
// let fois = buttonGroup[3]
// let divi = buttonGroup[4]
// let egal = buttonGroup[0]
// let reponse = document.querySelector('#response3')
// plus.addEventListener('click', () => {
//     operator.className = plus.firstElementChild.className;
// })
// moin.addEventListener('click', () => {
//     operator.className = moin.firstElementChild.className;
// })
// fois.addEventListener('click', () => {
//     operator.className = fois.firstElementChild.className;
// })
// divi.addEventListener('click', () => {
//     operator.className = divi.firstElementChild.className;
// })

// egal.addEventListener('click', () => {
//     switch(operator.className){
//         case 'fas fa-plus':
//             reponse.textContent = parseInt(input1.value) + parseInt(input2.value);
//             break;
//         case 'fas fa-minus':
//             reponse.textContent = parseInt(input1.value) - parseInt(input2.value);
//             break;
//         case 'fas fa-times':
//             reponse.textContent = parseInt(input1.value) * parseInt(input2.value);
//             break;
//         case 'fas fa-divide':
//             reponse.textContent = parseInt(input1.value) / parseInt(input2.value);
//             break;
//     }
// })

// exo4
let number = document.querySelectorAll('#numbersExo4>button')
let zero = number[9];
let one = number[0]; 
let two = number[1]; 
let three = number[2]; 
let four = number[3]; 
let five = number[4]; 
let six = number[5]; 
let seven = number[6]; 
let eight = number[7]; 
let nine = number[8]; 
let operator = document.querySelector("#exo-4>div>span>i")
let buttonGroup = document.querySelectorAll('#operatorsExo4>button');
let plus = buttonGroup[0]
let moin = buttonGroup[1]
let fois = buttonGroup[2]
let divi = buttonGroup[3]
let egal = document.querySelector("#exo-4>div>button")
let reponse = document.querySelector('#response4')
plus.addEventListener('click', () => {
    operator.className = plus.firstElementChild.className;
})
moin.addEventListener('click', () => {
    operator.className = moin.firstElementChild.className;
})
fois.addEventListener('click', () => {
    operator.className = fois.firstElementChild.className;
})
divi.addEventListener('click', () => {
    operator.className = divi.firstElementChild.className;
})

let input = document.querySelectorAll("#exo-4>div>input");
let input1 = input[0];
let input2 = input[1];
egal.addEventListener('click', () => {
    switch(operator.className){
        case 'fas fa-plus':
            reponse.textContent = parseInt(input1.value) + parseInt(input2.value);
            break;
        case 'fas fa-minus':
            reponse.textContent = parseInt(input1.value) - parseInt(input2.value);
            break;
        case 'fas fa-times':
            reponse.textContent = parseInt(input1.value) * parseInt(input2.value);
            break;
        case 'fas fa-divide':
            reponse.textContent = parseInt(input1.value) / parseInt(input2.value);
            break;
    }
    input1.value = "";
    input2.value = "";
})

one.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + one.textContent.trim();
    } else {
        input2.value = input2.value.trim() + one.textContent.trim();
    }
})

two.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + two.textContent.trim();
    } else {
        input2.value = input2.value.trim() + two.textContent.trim();
    }
})

three.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + three.textContent.trim();
    } else {
        input2.value = input2.value.trim() + three.textContent.trim();
    }
})

four.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + four.textContent.trim();
    } else {
        input2.value = input2.value.trim() + four.textContent.trim();
    }
})


five.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + five.textContent.trim();
    } else {
        input2.value = input2.value.trim() + five.textContent.trim();
    }
})

six.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + six.textContent.trim();
    } else {
        input2.value = input2.value.trim() + six.textContent.trim();
    }
})

seven.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + seven.textContent.trim();
    } else {
        input2.value = input2.value.trim() + seven.textContent.trim();
    }
})

eight.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + eight.textContent.trim();
    } else {
        input2.value = input2.value.trim() + eight.textContent.trim();
    }
})

nine.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + nine.textContent.trim();
    } else {
        input2.value = input2.value.trim() + nine.textContent.trim();
    }
})

zero.addEventListener('click', () => {
    if(onOff == true){
        input1.value = input1.value.trim() + zero.textContent.trim();
    } else {
        input2.value = input2.value.trim() + zero.textContent.trim();
    }
})

let onOff;
input1.addEventListener('click', () => {
    onOff = true;
})

input2.addEventListener('click', () => {
    onOff = false;
})

