let button = document.querySelector('.buttonCounter');
let buttonReset = document.querySelector('.buttonReset');
let counterText = document.querySelector('.counter');

let counter =0;

button.addEventListener('click', function () {
   counter = counter +1;

    counterText.innerText = counter;
})

buttonReset.addEventListener('click', function (){
    counter = 0;

    counterText.innerText = counter;
} )

