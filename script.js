const $btnMode = (function() { return document.getElementById("btn-mode")})()
const $btnGirar = (function() { return document.querySelector(".form > button")})()
const $btnFecharForm = (function() { return document.querySelector(".btn-dice-div > span")})()
const $btnReRun = (function() { return document.querySelector(".dice-form > #rerun")})()

const $slctDice = (function() { return document.getElementById("dice-faces")})()

const $diceForm = (function() { return document.querySelector(".dice-form")})()
const $form = (function() { return document.querySelector(".form")})()

$btnMode.addEventListener('click', e => {
    if(e.target.getAttribute("mode") == "d") {
        e.target.setAttribute("mode", "l");
        e.target.innerText = "🌞";
        document.querySelector("html").classList.add("ligth");
        document.querySelector("html").classList.remove("dark");
        
    } else if(e.target.getAttribute("mode") == "l") {
        e.target.setAttribute("mode", "d");
        e.target.innerText = "🌙";
        document.querySelector("html").classList.add("dark");
        document.querySelector("html").classList.remove("ligth");
    }

    easterEgg();
})

$btnFecharForm.addEventListener('click', e => {
    $diceForm.classList.add("disabled");
    $form.classList.remove("disabled");
})

$btnGirar.addEventListener('click', girar);
$btnReRun.addEventListener('click', girar);


function sortear(n) {
    return Math.floor(Math.random() * n) + 1;
}

let O_o = 0

function teste() {
    let a = 1;
    O_o = 0;
    do {
        O_o++;
        a = sortear($slctDice.value);
        console.log(a);
    } while (!(a < 0 || a > $slctDice.value) && O_o < 1500);
}

function girar(e) {
    let sucesso = false;

    let audio = new Audio($btnGirar.getAttribute('data-audiourl'))
    audio.preload
    audio.currentTime = 0;
    audio.volume = 1;

    let n = sortear($slctDice.value);

    let dice = $diceForm.querySelector(".dice");

    dice.innerHTML = n;

    if(!(n < 0 || n > $slctDice.value)) {
        $diceForm.querySelector("span").innerHTML = "Você girou um D" + $slctDice.value;
        audio.play();
        sucesso = true;
    }

    if(sucesso) {
        $diceForm.classList.remove("disabled");
        $form.classList.add("disabled");
    }
}







//EASTER EGG
let point = 0;
let eventTime;

function easterEgg() {
    let gatito = document.getElementById("gatito");
    let gatito2 = document.getElementById("gatito2");

    if(point > 5) {
        gatito.classList.remove("disabled");
    }

    if(point > 20) {
        gatito2.classList.remove("disabled");
    }

    clearTimeout(eventTime)
    eventTime = setTimeout(function() {
        point = 0;
        gatito.classList.add("disabled");
        gatito2.classList.add("disabled")
    }, 1000)

    point++
}