document.addEventListener('DOMContentLoaded', init());

function handleClick() {
    console.log('clicked');
}

function init() {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}