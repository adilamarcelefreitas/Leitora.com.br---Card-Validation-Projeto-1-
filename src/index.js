import validator from './validator.js';

console.log(validator);

document.querySelector('.número-cartão-input').oninput = () =>{
    document.querySelector('.número-cartão-box').innerText = document.querySelector('.número-cartão-input').value;
}

document.querySelector('.nome-cartão-input').oninput = () =>{
    document.querySelector('.nome-no-cartão').innerText = document.querySelector('.nome-cartão-input').value;
}

document.querySelector('.mês-input').oninput = () =>{
    document.querySelector('.mês').innerText = document.querySelector('.mês-input').value;
}

document.querySelector('.ano-input').oninput = () =>{
    document.querySelector('.ano').innerText = document.querySelector('.ano-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.atrás').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.atrás').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}