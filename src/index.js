

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
//uma variável chamada statusValidação para pegar a class no html com do DOM
// fazer validar ou invalidar o cartão com a resposta e com mudança de cor
function updateValidaçãoStatus(éVálido) {
  const statusValidação = document.querySelector('.validação-status');
  statusValidação.innerText = éVálido ? 'cartão válido' : 'cartão inválido';
  statusValidação.style.color = éVálido ? 'green' : 'red';
}

// Evento de validação feito com o butão submeter chamado pelo seletor do DOM
document.querySelector('.submeter-btn').addEventListener('click', function (event) {
  event.preventDefault();

  //variável para pega os números do cartão 
  const númeroCartãoCrédito = document.querySelector('.número-cartão-input').value;

  // Checa se o cartão de crédito é válido, usando a função validator
  const éVálido = validator.isValidCreditCard(númeroCartão);

  // Update do status da validação do cartão
  updateValidaçãoStatus(éVálido);
});

console.log(validator);
