let div = document.querySelector('#square')
let whiteBg = document.querySelector('#white-bg')
whiteBg.addEventListener('click', () => {
    div.style.backgroundColor = "white";
})

let redBg = document.querySelector('#red-bg')
redBg.addEventListener('click', () => {
    div.style.backgroundColor = "red";
})

let greenBg = document.querySelector('#green-bg')
greenBg.addEventListener('click', () => {
    div.style.backgroundColor = "green";
})

let blueBg = document.querySelector('#blue-bg')
blueBg.addEventListener('click', () => {
    div.style.backgroundColor = "blue";
})

let borderSolidThick = document.querySelector('#border-solid-thick');
borderSolidThick.addEventListener('click', () => {
    div.style.border = "solid black 5px";
})

let borderDotted = document.querySelector('#border-dashed');
borderDotted.addEventListener('click', () => {
    div.style.border = "dashed black 5px";
})

let borderSolidLight = document.querySelector('#border-solid-light');
borderSolidLight.addEventListener('click', () => {
    div.style.border = "solid black 2px";
})

let noBorderTop = document.querySelector('#no-border-top');
noBorderTop.addEventListener('click', () => {
    div.style.borderTop ="none";
})

let lightBorderTop = document.querySelector('#light-border-top');
lightBorderTop.addEventListener('click', () => {
    div.style.borderTop = "solid red 2px";
})

let thickBorderTop = document.querySelector('#thick-border-top');
thickBorderTop.addEventListener('click', () => {
    div.style.borderTop = "solid red 5px";
})

let color = document.querySelector('#color');
color.addEventListener('change', () => {
    div.style.backgroundColor = color.value;
})

let borderWidth = document.querySelector('#border');
borderWidth.addEventListener('change', () => {
    div.style.borderWidth = border.value + "px";
})

let borderTopWidth = document.querySelector('#border-top');
borderTopWidth.addEventListener('change', () => {
    div.style.borderTopWidth = borderTopWidth.value + "px";
})

let borderRightWidth = document.querySelector('#border-right');
borderRightWidth.addEventListener('change', () => {
    div.style.borderRightWidth = borderRightWidth.value + "px";
})

let borderBottomWidth = document.querySelector('#border-bottom');
borderBottomWidth.addEventListener('change', () => {
    div.style.borderBottomWidth = borderBottomWidth.value + "px";
})

let borderLeftWidth = document.querySelector('#border-left');
borderLeftWidth.addEventListener('change', () => {
    div.style.borderLeftWidth = borderLeftWidth.value + "px";
})

let borderRadius = document.querySelector('#radius');
borderRadius.addEventListener('change', () => {
    div.style.borderRadius = borderRadius.value + "px";
})

let borderTopLeftRadius = document.querySelector("#radius-top-left");
borderTopLeftRadius.addEventListener('change', () => {
    div.style.borderTopLeftRadius = borderTopLeftRadius.value + "px";
})

let borderTopRightRadius = document.querySelector('#radius-top-right');
borderTopRightRadius.addEventListener('change', () => {
    div.style.borderTopRightRadius = borderTopRightRadius.value + "px";
})

let borderBottomRightRadius = document.querySelector('#radius-bottom-right');
borderBottomRightRadius.addEventListener('change', () => {
    div.style.borderBottomRightRadius = borderBottomRightRadius.value + "px";
})

let borderBottomLeftRadius = document.querySelector('#radius-bottom-left');
borderBottomLeftRadius.addEventListener('change', () => {
    div.style.borderBottomLeftRadius = borderBottomLeftRadius.value + "px";
})

