// Navbar
let nav = document.querySelectorAll('header li');
let navEx1 = nav[0];
let navEx2 = nav[1];
let navEx3 = nav[2];
let navEx4 = nav[3];
let navEx5 = nav[4];
let navEx6 = nav[5];
let navEx7 = nav[6];
let ex1 = document.querySelector('#ex1')
let ex2 = document.querySelector('#ex2')
let ex3 = document.querySelector('#ex3')
let ex4 = document.querySelector('#ex4')
let ex5 = document.querySelector('#ex5')
let ex6 = document.querySelector('#ex6')
let ex7 = document.querySelector('#ex7')
navEx1.addEventListener('click', () => {
    navEx1.className = "bg-primary text-light";
    navEx2.className = "text-primary";
    navEx3.className = "text-primary";
    navEx4.className = "text-primary";
    navEx5.className = "text-primary";
    navEx6.className = "text-primary";
    navEx7.className = "text-primary";
    ex1.style.display = "block"
    ex2.style.display = "none"
    ex3.style.display = "none"
    ex4.style.display = "none"
    ex5.style.display = "none"
    ex6.style.display = "none"
    ex7.style.display = "none"

})
navEx2.addEventListener('click', () => {
    navEx1.className = "text-primary";
    navEx2.className = "bg-primary text-light";
    navEx3.className = "text-primary";
    navEx4.className = "text-primary";
    navEx5.className = "text-primary";
    navEx6.className = "text-primary";
    navEx7.className = "text-primary";
    ex1.style.display = "none"
    ex2.style.display = "block"
    ex3.style.display = "none"
    ex4.style.display = "none"
    ex5.style.display = "none"
    ex6.style.display = "none"
    ex7.style.display = "none"
})
navEx3.addEventListener('click', () => {
    navEx1.className = "text-primary";
    navEx2.className = "text-primary";
    navEx3.className = "bg-primary text-light";
    navEx4.className = "text-primary";
    navEx5.className = "text-primary";
    navEx6.className = "text-primary";
    navEx7.className = "text-primary";
    ex1.style.display = "none"
    ex2.style.display = "none"
    ex3.style.display = "block"
    ex4.style.display = "none"
    ex5.style.display = "none"
    ex6.style.display = "none"
    ex7.style.display = "none"
})
navEx4.addEventListener('click', () => {
    navEx1.className = "text-primary";
    navEx2.className = "text-primary";
    navEx3.className = "text-primary";
    navEx4.className = "bg-primary text-light";
    navEx5.className = "text-primary";
    navEx6.className = "text-primary";
    navEx7.className = "text-primary";
    ex1.style.display = "none"
    ex2.style.display = "none"
    ex3.style.display = "none"
    ex4.style.display = "block"
    ex5.style.display = "none"
    ex6.style.display = "none"
    ex7.style.display = "none"
})
navEx5.addEventListener('click', () => {
    navEx1.className = "text-primary";
    navEx2.className = "text-primary";
    navEx3.className = "text-primary";
    navEx4.className = "text-primary";
    navEx5.className = "bg-primary text-light";
    navEx6.className = "text-primary";
    navEx7.className = "text-primary";
    ex1.style.display = "none"
    ex2.style.display = "none"
    ex3.style.display = "none"
    ex4.style.display = "none"
    ex5.style.display = "block"
    ex6.style.display = "none"
    ex7.style.display = "none"
})
navEx6.addEventListener('click', () => {
    navEx1.className = "text-primary";
    navEx2.className = "text-primary";
    navEx3.className = "text-primary";
    navEx4.className = "text-primary";
    navEx5.className = "text-primary";
    navEx6.className = "bg-primary text-light";
    navEx7.className = "text-primary";
    ex1.style.display = "none"
    ex2.style.display = "none"
    ex3.style.display = "none"
    ex4.style.display = "none"
    ex5.style.display = "none"
    ex6.style.display = "block"
    ex7.style.display = "none"
})
navEx7.addEventListener('click', () => {
    navEx1.className = "text-primary";
    navEx2.className = "text-primary";
    navEx3.className = "text-primary";
    navEx4.className = "text-primary";
    navEx5.className = "text-primary";
    navEx6.className = "text-primary";
    navEx7.className = "bg-primary text-light";
    ex1.style.display = "none"
    ex2.style.display = "none"
    ex3.style.display = "none"
    ex4.style.display = "none"
    ex5.style.display = "none"
    ex6.style.display = "none"
    ex7.style.display = "block"
})
// fin Navbar

// exo 1
let h2 = document.querySelector('#ex1 h2');
h2.textContent =  "le titre modifié";
h2.style.color = "red";
h2.className = "bg-primary"

// fin exo1

// exo 3
let input3 = document.querySelector("#ex3 input");
let go = document.querySelector("#ex3 button");
let nom = document.querySelector("#ex3 span");

go.addEventListener('click', () => {
    nom.textContent = input3.value;
    input3.value = "";
})
// fin exo 3

// exo4
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let redSquare = document.querySelector(".red-square")
let deplacer = document.querySelector("#ex4 button");
let counter = document.querySelector("#counter span");
let i = 0;
let onOff = true;
deplacer.addEventListener("click", () => {

    if(onOff == true){
        let square = document.querySelector("#left div");
        left.removeChild(square);
        right.appendChild(redSquare.cloneNode());
        i++;
        counter.textContent = i;
        onOff = false;
    }else if(onOff == false){
        let square = document.querySelector("#right div");
        right.removeChild(square);
        left.appendChild(redSquare.cloneNode());
        i++;
        counter.textContent = i;
        onOff = true
    }
})
// fin exo4

// exo5
let addOeuf = document.querySelector("#add-oeuf");
let containerOeuf = document.querySelector("#oeuf-container");
addOeuf.addEventListener('click', () => {
    let newOeuf = document.createElement("img");
    newOeuf.src = "./public/img/oeuf.png";
    newOeuf.width = "150";
    containerOeuf.appendChild(newOeuf);
})
// fin exo5

// exo6
    // Niveau 1
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let egal = document.querySelector("#egal");
let reponse = document.querySelector("#reponseNiveau1");
egal.addEventListener('click', () => {
    let nb1 = parseInt(input1.value);
    let nb2 = parseInt(input2.value);
    if (!isNaN(nb1) && !isNaN(nb2)) {
        reponse.textContent = nb1 + nb2;
    }
})

    // Niveau 2
let calcul= document.querySelector("#calcul")
let calcButtons = document.querySelectorAll("#numbers button");
 // numbers
let one = calcButtons[0];
let two = calcButtons[1];
let three = calcButtons[2];
let four = calcButtons[4];
let five = calcButtons[5];
let six = calcButtons[6];
let seven = calcButtons[8];
let eight = calcButtons[9];
let nine = calcButtons[10];
let zero = calcButtons[13];
 //operators
let clear = calcButtons[12];
let equal = calcButtons[14];
let divi = calcButtons[15];
let plus = calcButtons[3];
let minus = calcButtons[7];
let times = calcButtons[11];

let op = false
let nbr1 = "";
let nbr2 = "";
let operateur;
let resultat = document.querySelector("#calcul-result")
one.addEventListener('click', () => {
    calcul.value += one.textContent
    if(op == false){
        nbr1 += one.textContent;
    }else if(op == true){
        nbr2 += one.textContent
    }  
})
two.addEventListener('click', () => {
    calcul.value += two.textContent
    if(op == false){
        nbr1 += two.textContent;
    }else if(op == true){
        nbr2 += two.textContent
    }  
})
three.addEventListener('click', () => {
    calcul.value += three.textContent
    if(op == false){
        nbr1 += three.textContent;
    }else if(op == true){
        nbr2 += three.textContent
    }  
})
four.addEventListener('click', () => {
    calcul.value += four.textContent
    if(op == false){
        nbr1 += four.textContent;
    }else if(op == true){
        nbr2 += four.textContent
    }  
})
five.addEventListener('click', () => {
    calcul.value += five.textContent
    if(op == false){
        nbr1 += five.textContent;
    }else if(op == true){
        nbr2 += five.textContent
    }  
})
six.addEventListener('click', () => {
    calcul.value += six.textContent
    if(op == false){
        nbr1 += six.textContent;
    }else if(op == true){
        nbr2 += six.textContent
    }  
})
seven.addEventListener('click', () => {
    calcul.value += seven.textContent
    if(op == false){
        nbr1 += seven.textContent;
    }else if(op == true){
        nbr2 += seven.textContent
    }  
})
eight.addEventListener('click', () => {
    calcul.value += eight.textContent
    if(op == false){
        nbr1 += eight.textContent;
    }else if(op == true){
        nbr2 += eight.textContent
    }  
})
nine.addEventListener('click', () => {
    calcul.value += nine.textContent
    if(op == false){
        nbr1 += nine.textContent;
    }else if(op == true){
        nbr2 += nine.textContent
    }  
})
zero.addEventListener('click', () => {
    calcul.value += zero.textContent
    if(op == false){
        nbr1 += zero.textContent;
    }else if(op == true){
        nbr2 += zero.textContent
    }  
})
plus.addEventListener('click', () => {
    calcul.value += plus.textContent
    operateur = "+"
    op = true
})
minus.addEventListener('click', () => {
    calcul.value += minus.textContent
    operateur = "-"
    op = true
})
times.addEventListener('click', () => {
    calcul.value += times.textContent
    operateur = "*"
    op = true
})
divi.addEventListener('click', () => {
    calcul.value += divi.textContent
    operateur = "/"
    op = true
})
equal.addEventListener('click', () => {
    if(operateur == "+"){
        resultat.textContent = `${calcul.value} = ${parseInt(nbr1) + parseInt(nbr2)}`
    }else if(operateur == "-"){
        resultat.textContent = `${calcul.value} = ${parseInt(nbr1) - parseInt(nbr2)}`
    }else if(operateur == "*"){
        resultat.textContent = `${calcul.value} = ${parseInt(nbr1) * parseInt(nbr2)}`
    }else if(operateur == "/"){
        resultat.textContent = `${calcul.value} = ${parseInt(nbr1) / parseInt(nbr2)}`
    }
    calcul.value = "";
    operateur = "";
    nbr1 = "";
    nbr2 = "";
    op = false;
})
clear.addEventListener('click', () => {
    calcul.value = "";
    operateur = "";
    nbr1 = "";
    nbr2 = "";
    op = false;
})
// fin exo6

//exo7
// creation d'une nouvelle task
let taskInput = document.querySelector("#ex7 input");
let tout = document.querySelector("#tout");
let complete = document.querySelector("#complete");
let aFaire = document.querySelector("#a-faire")
let liste = document.querySelector("#list")

taskInput.addEventListener('keydown', (e) => {
    if(e.key == "Enter" && taskInput.value.trim().length > 0){
        let newTask = document.createElement("div");
        newTask.className = "task aFaire";
        let taskText = document.createElement("p");
        taskText.textContent = taskInput.value;
        taskInput.value = "";
        newTask.appendChild(taskText);
        let editTask = document.createElement("input");
        editTask.style.display = "none";
        newTask.appendChild(editTask);
        let btnGroup = document.createElement("div");
        // btnCheck
        let btnCheck = document.createElement("button");
        btnCheck.className = "task-confirm";
        let iconeCheck = document.createElement("i");
        iconeCheck.className = "fas fa-check";
        btnCheck.appendChild(iconeCheck);
        btnGroup.appendChild(btnCheck);
        // btnEdit
        let btnEdit = document.createElement("button");
        btnEdit.className = "task-edit";
        let iconeEdit = document.createElement("i");
        iconeEdit.className = "fas fa-edit";
        btnEdit.appendChild(iconeEdit);
        btnGroup.appendChild(btnEdit);
        // btnDelete
        let btnDelete = document.createElement("button");
        btnDelete.className = "task-delete";
        let iconeDelete = document.createElement("i");
        iconeDelete.className = "fas fa-trash-alt";
        btnDelete.appendChild(iconeDelete);
        btnGroup.appendChild(btnDelete);
        newTask.appendChild(btnGroup);
        liste.appendChild(newTask);
        
    }
    let buttonCheck = document.getElementsByClassName("task-confirm");
    let tasks = document.querySelectorAll("#list .task");
    for(let i = 0; i < buttonCheck.length; i++){
        buttonCheck[i].addEventListener('click', () => {
            buttonCheck[i].parentElement.parentElement.style.backgroundColor = "#257914"
            buttonCheck[i].parentElement.parentElement.className = "task check"
        })
    }
    let buttonEdit = document.getElementsByClassName("task-edit");
    let onOffEdit = false;
    for(let i = 0; i < buttonEdit.length; i++){
        buttonEdit[i].addEventListener('click', () => {
            let input = buttonEdit[i].parentElement.previousElementSibling;
            let p = input.previousElementSibling;
            if(onOffEdit == false){
                input.style.display = "block";
                p.style.display = "none";
                input.value = p.textContent;
                onOffEdit = true;
            } else if (onOffEdit == true){
                p.textContent = input.value;
                input.style.display = "none";
                p.style.display = "block";
                onOffEdit = false;
            }
        })
    }
    let buttonDelete = document.getElementsByClassName("task-delete");
    for (let i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].onclick = function() {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }
    }
    
    tout.addEventListener("click", () => {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].style.display == "none") {
                tasks[i].style.display = "flex";
            }   
        }
            
    })
    complete.addEventListener('click', () => {
        tasks.forEach(element => {
            if (element.className == "task aFaire") {
                element.style.display = "none";
            }else if(element.className == "task check"){
                element.style.display = "flex"
            }
        });
    })
    aFaire.addEventListener('click', () => {
        tasks.forEach(element => {
            if (element.className == "task aFaire") {
                element.style.display = "flex";
            }else if(element.className == "task check"){
                element.style.display = "none"
            }
        });
    })
    
})

// eventListener sur tous les boutons




// fin exo7