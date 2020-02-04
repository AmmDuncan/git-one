const button = document.querySelector('.button');
const body = document.querySelector('body');
const container = document.querySelector('.container');

button.addEventListener('click', e => {
    e.preventDefault();

    body.style.backgroundColor = "rgb(0, 211, 141)";
    container.style.backgroundColor = "rgb(25, 155, 111)";
    button.style.color = "rgb(10, 80, 56)";
})