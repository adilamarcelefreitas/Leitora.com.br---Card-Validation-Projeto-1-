

//Inserir o número do cartão
document.querySelector('.número-cartão-input').oninput = () =>{
    document.querySelector('.número-cartão').innerText = document.querySelector('.número-cartão-input').value;
}

//Inserir o nome do usuário
document.querySelector('.nome-cartão-input').oninput = () =>{
    document.querySelector('.nome-no-cartão').innerText = document.querySelector('.nome-cartão-input').value;
}

//Selecionar o mês com o seletor e opções dadas
document.querySelector('.mês-input').oninput = () =>{
    document.querySelector('.mês').innerText = document.querySelector('.mês-input').value;
}

//Selecionar o ano com o seletor e opções dadas
document.querySelector('.ano-input').oninput = () =>{
    document.querySelector('.ano').innerText = document.querySelector('.ano-input').value;
}

//Quando o mouse clicar na opção do cvv terá uma interação de rotação do cartão 
document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.atrás').style.transform = 'perspective(1000px) rotateY(0deg)';
}

//Quando o mouse sair de cima da opção cvv o cartão faz nova rotação para parte da frente
document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.atrás').style.transform = 'perspective(1000px) rotateY(180deg)';
}

//Inserir o valor do cvv com referência de no máximo 3 digítos
document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}


import validator from './validator.js';

// Função que atualiza se o cartão é válido ou inválido com destque de cores
function updateValidationStatus(isValid) {
  const validationStatus = document.querySelector('.validation-status');
  validationStatus.innerText = isValid ? 'Valid' : 'Invalid';
  validationStatus.style.color = isValid ? 'green' : 'red';
}

// Evento feito com o click de submeter no html 
document.querySelector('.submeter-btn').addEventListener('click', function (event) {
  event.preventDefault();

  // Pega os números do cartão 
  const creditCardNumber = document.querySelector('.número-cartão-input').value;

  // Checa se o cartão de crédito é válido, usando a função validator
  const isValid = validator.isValidCreditCard(creditCardNumber);

  // Update so status da validação do cartão
  updateValidationStatus(isValid);
});

console.log(validator);
